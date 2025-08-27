# AGENTS

Welcome to the **openapi-desktop** repository. This project packages Swagger UI into an Electron desktop application and builds distributable artifacts for Linux, Windows and macOS.

## Getting Started
- Use Node.js 18+ or rely on the provided Dockerfile.
- Install dependencies with `npm ci`.
- Use the Makefile targets (`build-linux`, `build-windows`, `build-macos`) for platform builds.

## Development Guidelines
- Follow two-space indentation and run Prettier when available: `npx prettier -w`.
- Keep commits small and use [Conventional Commits](https://www.conventionalcommits.org/) prefixes (`feat:`, `fix:`, `docs:` ...).
- Update tests and documentation alongside code changes.
- Avoid committing build artifacts or `node_modules`.
- Use ripgrep (`rg`) instead of recursive `ls` or `grep` for searches.

## Required Checks
- Run `npm test` before pushing changes.
- If you modify build scripts or Docker setup, run `docker build -t openapi-desktop-builder .` to verify the image builds.
- Note any failing checks in your PR description.

## Pull Requests
- Summarize your changes and testing steps in the PR description.
- Ensure the working tree is clean before committing.

