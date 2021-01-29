// jsonwebtoken 最流行的跨域认证解决方案
let jwt = require('jsonwebtoken');

// 自己设定的死值
let secretKey = "**my_secret_key$$"

module.exports = {
    createToken: (payload)=>{
        return jwt.sign(payload, secretKey,{expiresIn: '1h'});
    },
    verfiyToken: async (ctx,next)=>{
        if(ctx.header.authorization){
          let token = ctx.header.authorization;
          try {
            // 验证token
            jwt.verify(token,secretKey);
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
    }
}