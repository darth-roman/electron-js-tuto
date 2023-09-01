const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), NodeJS (v${versions.node()}) and ElectronJS (v${versions.electron()})`

const func = async () => {
    const response = await window.versions.ping()
    document.getElementById('pong').innerText = response
}

func()