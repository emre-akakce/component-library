import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import copy from "rollup-plugin-copy";

// Custom plugin: keep CSS imports in the output, but don't try to parse them
const externalCss = {
    name: "external-css",
    resolveId(source) {
        if (source && source.endsWith(".css")) {
            // Mark CSS as external so Rollup leaves `import "./x.css";` in the JS
            return { id: source, external: true };
        }
        return null;
    },
};

export default [
    // JS build (CJS + ESM) with preserved folder structure
    {
        input: "src/index.ts",
        output: [
            {
                dir: "dist/cjs",
                format: "cjs",
                sourcemap: true,
                preserveModules: true,
                preserveModulesRoot: "src",
            },
            {
                dir: "dist/esm",
                format: "esm",
                sourcemap: true,
                preserveModules: true,
                preserveModulesRoot: "src",
            },
        ],
        plugins: [
            externalCss,
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),

            // Copy CSS, preserving folders (no extra "components" level)
            copy({
                targets: [
                    {
                        src: "src/components/**/*.css",
                        dest: "dist/esm", // -> dist/esm/components/Button/Button.css
                    },
                    {
                        src: "src/components/**/*.css",
                        dest: "dist/cjs", // -> dist/cjs/components/Button/Button.css
                    },
                ],
                flatten: false, // keep 'components/Button/Button.css'
            }),
        ],
        external: ["react", "react-dom"],
    },

    // Types build
    {
        input: "src/index.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/],
    },
];
