// 引入koa/router路由
const Router = require('@koa/router');
const router = new Router();
// 引入控制器，对数据库的增删改查的操作
let controller = require('../controllers/blogController');

// 首页路由(读取磁盘需要耗时的，异步操作)
router.get('/', controller.welcome
    // async (ctx) => {
    //     await controller.welcome(ctx, db);
    // }
);

module.exports = router;