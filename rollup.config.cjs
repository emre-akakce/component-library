const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts").default;
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

// FIX: Export an async function to accommodate the ES Module environment
// that is causing 'require is not defined'.
module.exports = async () => {
    // Use dynamic import instead of require to load package.json in an ESM context.
    const packageJson = require("./package.json");

    // Configuration for CJS and ESM bundles (the actual compiled code)
    const mainBundleConfig = {
        // Entry point defined in your tsconfig.json rootDir
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main, // dist/cjs/index.js (CommonJS)
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module, // dist/esm/index.js (ES Module)
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            // Automatically excludes React/ReactDOM from the bundle size
            peerDepsExternal(),

            // Allows Rollup to find external modules (like helper packages) in node_modules
            resolve(),

            // Converts CommonJS dependencies to ES modules for bundling
            commonjs(),

            // Compiles TypeScript files
            typescript({
                tsconfig: "./tsconfig.json",
                exclude: ["**/*.stories.tsx"], // Excludes Storybook files from the final build
                declaration: false // Prevent TypeScript from emitting declaration files
            }),
        ],
        // Explicitly list all external dependencies that should NOT be bundled
        external: ["react", "react-dom"],
    };

    // Configuration for generating TypeScript type declaration files (.d.ts)
    const typeDeclarationConfig = {
        // Input is typically the primary entry point
        input: "src/index.ts",
        output: [{ file: packageJson.types, format: "esm" }], // dist/types/index.d.ts
        plugins: [dts()], // The plugin that generates the type declarations
    };


    // Rollup can handle multiple configurations, so we return an array
    return [
        mainBundleConfig,
        typeDeclarationConfig,
    ];
};
