# Component Library

A small, reusable component library for building UI across projects. This repository contains the source components, docs, and tooling for development, testing, and publishing.

## Contents

- src/ — component source (React / TypeScript)
- stories/ — Storybook stories (if present)
- dist/ — build output
- tests/ — unit tests
- package.json — scripts and dependencies

## Prerequisites

- Node.js 16+ (macOS)
- npm, yarn, or pnpm

## Installation

Clone and install dependencies:

```bash
git clone <repo-url>
cd component-library
npm install
# or
# yarn
# pnpm install
```

## Development

Run Storybook (if configured) to develop and preview components:

```bash
npm run storybook
```

Start a local dev build/watch (if available):

```bash
npm run dev
```

Run the test suite:

```bash
npm test
# or with coverage
npm run test:ci
```

Lint and format:

```bash
npm run lint
npm run format
```

## Build

Create a production build for publishing:

```bash
npm run build
```

Build output will be placed in `dist/` (or as configured in package.json).

## Usage

Install the published package in other projects and import components:

```bash
npm install @your-scope/component-library
```

Example:

```tsx
import { Button } from '@your-scope/component-library';

export default function App() {
  return <Button variant="primary">Click me</Button>;
}
```

Adjust import path and component API to match this repository's exports.

## Publishing

Prepare package.json (version, name, exports). Then:

```bash
npm run build
npm publish --access public
```

If using scoped packages, ensure access is set correctly.

## Testing

This project uses Jest + React Testing Library (or configured runner). Run:

```bash
npm test
```

Add/modify tests in the `tests/` (or `src/__tests__/`) directory.

## Contributing

- Open an issue for bugs or feature requests.
- Create feature branches from `main`.
- Write tests for new features.
- Follow the project's
````
<userPrompt>
Provide the contents of the new file.
</userPrompt>