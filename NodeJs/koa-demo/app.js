const Koa = require('koa')
const app = new Koa()

// app.use:加载中间件
app.use( async ( ctx ) => {
  ctx.body = 'hello koa2'
})

app.listen(80)
console.log('[demo] start-quick is starting at port 80')