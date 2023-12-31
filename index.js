const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    //win.loadFile('about.html')
    win.loadFile('index.html')
}

app.whenReady().then(()=> {
    ipcMain.handle('ping', ()=> 'pong')
    createWindow()
})
app.on('window-all-closed', ()=> app.quit())