import path from 'path'
import { app, ipcMain } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import { autoUpdater } from 'electron-updater'
import log from 'electron-log'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
  await app.whenReady()

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (isProd) {
    await mainWindow.loadURL('app://./')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/`)
    mainWindow.webContents.openDevTools()
  }

  // Configuração do autoUpdater
  autoUpdater.logger = log;
  log.transports.file.level = 'info';

  autoUpdater.on('checking-for-update', () => {
    log.info('Verificando atualizações...');
  });

  autoUpdater.on('update-available', () => {
    log.info('Atualização disponível.');
  });

  autoUpdater.on('update-not-available', () => {
    log.info('Nenhuma atualização disponível.');
  });

  autoUpdater.on('error', (err) => {
    log.error('Erro no update:', err);
  });

  autoUpdater.on('download-progress', (progressObj) => {
    log.info(`Progresso do download: ${progressObj.percent}%`);
  });

  autoUpdater.on('update-downloaded', () => {
    log.info('Atualização baixada. Aplicando atualização...');
    autoUpdater.quitAndInstall();
  });

  ipcMain.on('check-for-updates', () => {
    autoUpdater.checkForUpdates();
  });

  ipcMain.on('install-update', () => {
    autoUpdater.quitAndInstall();
  });

  autoUpdater.checkForUpdatesAndNotify();
  
})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})
