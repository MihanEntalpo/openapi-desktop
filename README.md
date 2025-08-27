# OpenAPI Desktop

This is a minimal Electron application that bundles [Swagger UI](https://github.com/swagger-api/swagger-ui) to view OpenAPI specifications.

## Prerequisites
- [Node.js](https://nodejs.org/) 18+

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
