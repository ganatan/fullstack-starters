src/
  main/          => code Electron
    main.js
  renderer/      => projet Angular

mkdir -p src/main
mkdir -p src/renderer  

cd src/renderer  
ng new angular-starter --style=scss --routing=false

package.json
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "build:electron": "ng build --base-href ./",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },


npm init -y
npm install --save-dev electron

src/main/main.js
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
    path.join(__dirname, '../renderer/dist/angular-starter/browser/index.html')
  )
}

app.whenReady().then(() => {
  createWindow()
})


    "electron": "electron src/main/main.js"