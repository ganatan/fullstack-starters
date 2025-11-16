'use strict';

const { app, BrowserWindow, ipcMain } = require('electron')
const WebSocket = require('ws')

function startWebSocketServer() {
  const wss = new WebSocket.Server({ port: 8080 })
  wss.on('connection', (ws) => {
    console.log('connexion websocket')
    ws.on('message', (msg) => {
      console.log(`WebSocketServer: ${msg}`)
      ws.send(`Reponse WebSocketServer: ${msg}`)
    })
  })
  console.log('00000000002:startWebSocketServer')
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: `${__dirname}/preload.js`
    }
  })
  win.loadFile(`${__dirname}/../renderer/index.html`)
  win.webContents.openDevTools()

  return win
}

ipcMain.handle('ping', () => {
  return 'pong'
})

if (process.env.NODE_ENV !== 'test') {
  app.whenReady().then(() => {
    startWebSocketServer()
    createWindow()
  })
}

module.exports = { createWindow, startWebSocketServer }

