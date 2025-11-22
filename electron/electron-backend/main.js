'use strict'

const { app, BrowserWindow } = require('electron')
const path = require('path')
require('dotenv').config()

let backendStarted = false

function startBackend() {
  if (backendStarted) return
  backendStarted = true
  require('./backend')
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  const indexHtmlPath = path.join(__dirname, 'renderer', 'index.html')
  console.log('[MAIN] Loading window:', indexHtmlPath)

  win.loadFile(indexHtmlPath).catch(err => {
    console.error('[MAIN] Error loading window:', err)
  })
}

app.whenReady().then(() => {
  startBackend()
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
