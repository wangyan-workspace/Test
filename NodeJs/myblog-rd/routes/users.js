const router = require('koa-router')()
// jsonwebtoken 最流行的跨域认证解决方案
// let jwt = require('jsonwebtoken');

const {createToken} = require('../auth')

router.prefix('/user')

// 自己设定的死值
let secretKey = "**my_secret_key$$"

router.post('/login', async (ctx, next) => {
  let { username, password } = ctx.request.body;
  if (username == 'lisi' && password == '123456') {
    // 登陆成功
    // 生成token
    // payload里面的信息不能有重复,必须是唯一的，因为生成的码也会是唯一的
    let payload = {
      userId: Math.random(),
      username,
    }
    // expiresIn: 120 ：设置过期时间，以秒为单位
    var token = createToken(payload)
    // console.log('token::',token);
    ctx.body = {
      state: 'success',
      token
    }
  } else {
    ctx.body = 'fail'
  }
})



module.exports = router
