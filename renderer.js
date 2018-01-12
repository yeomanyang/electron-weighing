const ipcRenderer = require('electron').ipcRenderer
ipcRenderer.on("weighing", (event, message) => {
    document.getElementById('weight').innerHTML=`模拟重量：${message}g`;
});
