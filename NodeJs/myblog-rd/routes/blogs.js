const router = require('koa-router')()
// jsonwebtoken 最流行的跨域认证解决方案
let jwt = require('jsonwebtoken');
router.prefix('/blog')

router.get("/list",async(ctx,next)=>{
  if(ctx.header.authorization){
    let token = ctx.header.authorization;
    try {
      // 验证token
      jwt.verify(token,'**my_secret_key$$');
      // 验证成功后，继续执行下一个中间件
      await next();
    } catch(err) {
      // err
      ctx.status = 401;
      ctx.body = {
        state: 'auth-fail'
      }
    }
  }
},
async (ctx,next)=>{
  let blogs = [
    {blogId: 11, title: '标题11', content: "内容11", postTime: new Date()},
    {blogId: 22, title: '标题22', content: "内容22", postTime: new Date()},
    {blogId: 33, title: '标题33', content: "内容33", postTime: new Date()},
  ];
  ctx.body = {
    state: 'success',
    blogs
  };
}
);

module.exports = router
