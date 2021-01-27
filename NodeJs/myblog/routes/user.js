// 引入koa/router路由
const Router = require('@koa/router');
const router = new Router();
// 引入控制器，对数据库的增删改查的操作
let controller = require('../controllers/userController');

// 登录路由
router.get('/login', async (ctx) => {
    let loginUser = ctx.session.loginUser;
    await ctx.render("login",{
        user: loginUser
    })
})

//接收登录传给login页面的信息   
router.post('/login', controller.login
    // async (ctx) => {
    //     await controller.login(ctx, db);
    // }
)

router.get('/regist', async ctx => {
    let loginUser = ctx.session.loginUser;
    await ctx.render('regist',{
        user: loginUser
    });
})

router.post('/regist', controller.regist
    // async ctx => {
    //     await controller.regist(ctx, db);
    // }
)

router.get('/checkUser',controller.checkUser);

module.exports = router;