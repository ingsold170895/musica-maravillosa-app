const {app, BrowserWindow} = require('electron');
const url = require("url");
const path = require("path");
const os = require("os");
const log = require('electron-log');



const {autoUpdater} = require('electron-updater');
const isDev = require('electron-is-dev');
let isUpdateReady = "false";
let isUpdateDownloaded = "false";

// configure logging
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');


// CONFIGURACION PARA LA VENTANA INICIAL
let appWindow;

//let workerWindow;

function initWindow() {

  appWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInSubFrames: true,
      enableRemoteModule: true,
      nodeIntegrationInWorker: true,
      javascript: true,
    }
  });

  appWindow.maximize();
  appWindow.setResizable(false);

  // Electron Build Path
  appWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  /*
  workerWindow = new BrowserWindow({
    show: false
  });
  workerWindow.loadURL("file://" + __dirname + "/dist/worker.html");

  // workerWindow.hide();
  workerWindow.on("closed", () => {
    workerWindow = null;
  });

   */

  // Initialize the DevTools.
  //appWindow.webContents.openDevTools();

  appWindow.on('closed', function () {
    appWindow = null
  });
  appWindow.once('ready-to-show', () => {
    appWindow.show();
  });
}

app.on('ready', () => {
  //if(!isDev){
  autoUpdater.checkForUpdates();
  //}
  initWindow();
});

// Close when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (appWindow === null) {
    initWindow()
  }
});


// En el proceso principal.
const {ipcMain} = require('electron');
ipcMain.on('typeComputer', (event, arg) => {
  console.log(arg);
  event.returnValue = os.type();
});

ipcMain.on('cpus', (event, arg) => {
  console.log(arg);
  console.log(os.cpus()[0]);
  event.returnValue = os.cpus()[0].model
});

ipcMain.on('platform', (event, arg) => {
  console.log(arg);
  event.returnValue = os.platform()
});

ipcMain.on('version-app', (event, arg) => {
  console.log(arg);
  console.log('Version ' + app.getVersion());
  event.returnValue = app.getVersion();
});



ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});

ipcMain.on('isUpdateReady', (event, args) => {
  event.returnValue = isUpdateReady;
});

ipcMain.on('isUpdateDownloaded', (event, args) => {
  event.returnValue = isUpdateDownloaded;
});


//-------------------------------------------------------------------
// Auto updates
//-------------------------------------------------------------------
const sendStatusToWindow = (text) => {
  log.info(text);
  if (appWindow) {
    appWindow.webContents.send('message', text);
  }
};

autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...');
});
autoUpdater.on('update-available', info => {
  sendStatusToWindow('Update available.');
});
autoUpdater.on('update-not-available', info => {
  sendStatusToWindow('Update not available.');
});
autoUpdater.on('error', err => {
  sendStatusToWindow(`Error in auto-updater: ${err.toString()}`);
});
autoUpdater.on('download-progress', progressObj => {
  sendStatusToWindow(
    `Download speed: ${progressObj.bytesPerSecond} - Downloaded ${progressObj.percent}% (${progressObj.transferred} + '/' + ${progressObj.total} + )`
  );
});
autoUpdater.on('update-downloaded', info => {
  sendStatusToWindow('Update downloaded; will install now');
});

autoUpdater.on('update-downloaded', info => {
  // Wait 5 seconds, then quit and install
  // In your application, you don't need to wait 500 ms.
  // You could call autoUpdater.quitAndInstall(); immediately
  autoUpdater.quitAndInstall();
});
