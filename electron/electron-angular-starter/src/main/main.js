const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: false
    }
  })
  win.loadFile(
    path.join(__dirname, '../renderer/angular/dist/angular-starter/browser/index.html')
  )
}

app.whenReady().then(() => {
  createWindow()
})
