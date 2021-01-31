// jsonwebtoken 最流行的跨域认证解决方案
let jwt = require('jsonwebtoken');

// 自己设定的死值
let secretKey = "**my_secret_key$$"

module.exports = {
    // 生成Token
    createToken: (payload)=>{
        return jwt.sign(payload, secretKey,{expiresIn: '1h'});
    },
    // 验证Token
    verfiyToken: async (ctx,next)=>{
        if(ctx.header.authorization){
          // split: 按什么进行分割
          let parts = ctx.header.authorization.split(" ");
          // console.log(parts[0]) // Bearer
          // console.log(parts[1]) // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjAuNzk1ODgyNzE2NzE1MjAwMSwidXNlcm5hbWUiOiJsaXNpIiwiaWF0IjoxNjExODkyMzIzLCJleHAiOjE2MTE4OTU5MjN9.rB05s1k4JTwaaTkWmUL6UBfudBjVAOcrtq2XDRSJhQU
          let bearer = parts[0];
          let token = parts[1];
          if(/^Bearer$/.test(bearer)) {
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
}