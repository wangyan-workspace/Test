let fs = require('fs')

function log( ctx ) {
    // ctx.method:获取用户是get方法还是post方法
    // ctx.header.host 获取用户的IP地址
    // ctx.url：获取用户访问的是哪个页面
    // console.log( ctx.method, ctx.header.host + ctx.url )
    let data = ctx.method + " " + ctx.header.host + ctx.url + " " + new Date() + '\n';
    // appendFile:向日志文档中添加记录
    fs.appendFile('log.txt',data,function(){
      console.log('日志已记录...');
    })
}
  
// module.exports = function () {
//   return async function (ctx) {
//     log(ctx);
//   };
// };

module.exports = async function (ctx) {
  log(ctx);
}