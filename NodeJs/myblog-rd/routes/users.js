const router = require('koa-router')()

router.prefix('/users')

router.post('/', function (ctx, next) {
  let {username,password} = ctx.request.body;
  if(username == 'lisi' && password == '123456'){
    ctx.body = 'success'
  } else {
    ctx.body = 'fail'
  }
})

module.exports = router
