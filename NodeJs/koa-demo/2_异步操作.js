const Koa = require('koa')
const app = new Koa()

function getData(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let data = Math.random();
        // 使用resolve方法返回数据
        if(data){
          resolve(data);
        }else{
          reject('fail...');
        }
      },2000)
    });
}
// app.use:加载中间件
// 异步操作  ctx:上下文
// async function fn(ctx){
//   var data = await getData();
//   ctx.body = data;
// }
// app.use(fn);

app.use( async ( ctx ) => {
  // 异步操作 await等待promise返回的对象，之后再执行下面的语句
  ctx.body = await getData();
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')