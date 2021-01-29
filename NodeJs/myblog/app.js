// 引入koa
const Koa = require('koa');
// 引入ejs模板引擎
const views = require("koa-views");

const path = require("path");
// 引入koa-static静态资源
const staticPath = require('koa-static');
// 引入bodyparser
const bodyParser = require('koa-bodyparser');
// 引入session
const session = require('koa-session');

const app = new Koa();

// 引入路由模块(默认找routes文件夹下的index.js文件)
const user = require('./routes/user');
const blog = require('./routes/blog');
// const header = require('./routes/header');

// 使用ctx.body解析中间件
app.use(bodyParser());

// 加载模板引擎
app.use(
    views(path.join(__dirname,"/views"),{
        extension: "ejs"
    })
)

// 配置静态资源目录对于相对入口文件app.js的路径
app.use(staticPath(
    path.join(__dirname,'/public')
))

// 配置session
app.keys = ['myblog_session_key$$'];
app.use(session(app));

app.use(async(ctx,next) => {
    if(ctx.url == "/login" || ctx.url == "/regist") {
        await next();
    } else {
        let loginUser = ctx.session.loginUser;
        if(loginUser) {
            await next();
        } else {
            ctx.redirect("/login");
        }
    }
})

app.use(user.routes()).use(user.allowedMethods());
app.use(blog.routes()).use(blog.allowedMethods());

// 监听3000端口号
app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");