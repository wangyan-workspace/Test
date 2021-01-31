什么是CORS
    CORS是跨域资源共享，它允许浏览器向跨源服务器，发出AJAX请求，从而克服了AJAX只能同源使用的限制，允许访问非同源的服务器获取数据。发送方式有两种，一种是简单请求，一种是非简单请求，（在我）工作中两种请求都会用得到，主要还是非简单请求，请求数据时是application/json的content-type格式传输的,这种是非简单请求，先进行options预检请求，预检请求通过了在真正的发一次请求,把数据带过去
## 开发过程
1. 安装koa-cors中间件，解决跨域问题
    `npm install koa-cors`
    在app.js中配置
    ```
    var cors = require('koa-cors');
    app.use(cors());
    ```
2. 安装jsonwebtoken中间件
    `npm install jsonwebtoken`
    - 使用jwt.sign(payload, secretOrPrivateKey)来生成token
    - 使用下面的代码来验证token
    ```
    try {
        jwt.verify(token, 'wrong-secret');
    } catch(err) {
    // err
    } 
    ```