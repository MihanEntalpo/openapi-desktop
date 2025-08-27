# OpenAPI Desktop

This is a minimal Electron application that bundles [Swagger Editor](https://github.com/swagger-api/swagger-editor) to edit OpenAPI specifications.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (for local builds)
- [Docker](https://www.docker.com/) for containerized builds

## Install

```bash
npm install
```

## Run in development

```bash
npm start
```

## Build distributables

The project uses [electron-builder](https://www.electron.build/) to package binaries for different platforms.

- **Windows**:
  ```bash
  npm run build:win
  ```
- **Linux**:
  ```bash
  npm run build:linux
  ```
- **macOS**:
  ```bash
  npm run build:mac
  ```

## Testing

No automated tests are included yet.

## Build with Docker

If you prefer not to install Node.js locally, you can build the app inside Docker.

First build the image:

```bash
make docker-build
```

Then build for your platform:

- **Linux**:
  ```bash
  make build-linux
  ```
- **Windows**:
  ```bash
  make build-windows
  ```
- **macOS**:
  ```bash
  make build-macos
  ```

The resulting files will appear under `dist/linux`, `dist/windows` and `dist/macos` respectively.
