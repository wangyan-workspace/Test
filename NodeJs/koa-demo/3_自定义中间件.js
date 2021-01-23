const Koa = require('koa')
const app = new Koa()
let logger = require('./logger')
// 因为logger.js文件中module.exports是一个函数，函数中是异步操作的async
// 所以执行时要调用logger()
// app.use(logger())

// 这种方式下，暴露出来的直接是异步操作的async，直接使用就行
app.use(logger);

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')