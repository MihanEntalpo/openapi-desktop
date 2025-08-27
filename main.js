const { app, BrowserWindow } = require("electron");
const path = require("path");

const specPath = process.argv.slice(2)[0];

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, "favicon.png"),
    title: "OpenAPI Desktop",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const indexPath = path.join(__dirname, "index.html");
  if (specPath) {
    win.loadFile(indexPath, { query: { file: path.resolve(specPath) } });
  } else {
    win.loadFile(indexPath);
  }
  win.setTitle("OpenAPI Desktop");
}

app.whenReady().then(() => {
  if (process.platform === "darwin") {
    app.dock.setIcon(path.join(__dirname, "favicon.png"));
  }
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
