const router = require("koa-router")();
var pug = require("pug");
let { mainWindow } = require('../main');

router.get("/CargoWeight/index.jsp", async (ctx, next) => {
    const weight = Math.floor(Math.random() * 1000);
    ctx.body = `test<Weight>${weight} g</Weight>`;
    mainWindow.webContents.send('weighing', weight);
});

module.exports = router;
