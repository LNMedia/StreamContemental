// Node server imports
const express = require('express');
const fileUpload = require('express-fileupload');
require('dotenv').config();
const path = require('path');
const browserSync = require('browser-sync');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Electron app import
const { app, BrowserWindow, Menu } = require('electron');
const { ipcMain } = require('electron');

// Router imports
const staticRoutes = require('./router/staticRoutes');
const connectionRoutes = require('./router/connectionRoutes');
const moduleRoutes = require('./router/moduleRoutes');
const fileRoutes = require('./router/fileRoutes');
const registrarRoutes = require('./router/registrarRoutes');

// Start express server & set view engine
const webApp = express();
const serverPort = process.env.SERVERPORT || 3025;
webApp.set('views', path.join(__dirname, 'views'));
webApp.set('view engine', 'ejs');

// Middleware
webApp.use(cors());
webApp.use(cookieParser());
webApp.use(fileUpload());
webApp.use(express.json());
webApp.use(express.urlencoded({ extended: true }));

// Caching
webApp.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    next();
});

// Set routes
webApp.use('/api', staticRoutes);
webApp.use('/api', connectionRoutes);
webApp.use('/api', fileRoutes);
webApp.use('/api', moduleRoutes);
webApp.use(registrarRoutes);

// 404-Fallback || File not found
webApp.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// BrowserSync starten
browserSync.init({
    proxy: `http://localhost:${serverPort}`,
    files: ['app.js', 'resources/**/*', 'views/**/*'],
    watchOptions: {
        ignored: 'node_modules/**',
    },
    open: false,
    notify: false,
});

// Express-Server starten
webApp.listen(serverPort, () => {
    console.log(`Express läuft auf http://localhost:${serverPort}`);
});

// 🔧 Starte Electron (auskommentiert)

// let mainWindow;

// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 1300,
//     height: 900,
//     icon: path.join(__dirname, 'resources', 'images', 'icon.ico'),
//     webPreferences: {
//         nodeIntegration: false,
//         contextIsolation: true,
//         backgroundThrottling: false
//     }
//   });

//   Menu.setApplicationMenu(null);
//   mainWindow.loadURL(`http://localhost:${serverPort}`);
// }

// app.whenReady().then(() => {
//     createWindow();
//     app.on('activate', () => {
//         if (BrowserWindow.getAllWindows().length === 0) {
//             createWindow();
//         }
//     });
// });
// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit();
//     }
// });