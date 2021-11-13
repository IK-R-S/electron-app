const { app, BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
      width: 700,
      height: 500
    })
  
    win.loadFile('src/index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })