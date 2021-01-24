const Koa = require('koa');
// 引入第三方的中间件路由
const Router = require('@koa/router');
// 引入中间件：模板引擎
const views = require('koa-views')
const path = require('path')

const app = new Koa();
const router = new Router();

// 加载模板引擎（固定的）
// console.log(__dirname); //固定语法文件的绝对路径
// 将绝对路径与路径下面的指定文件相连接
app.use(views(path.join(__dirname, './views'), {
    // 扩展名extension
    extension: 'ejs'
}))

// 引入mysql这个包
var mysql = require('mysql');
// mysql.createConnection：调用mysql下面的方法创建链接
// var connection = mysql.createConnection({
//     //  host:连接到本地 localhost
//     host: 'localhost',
//     // user:用户名 (创建MySQL数据库时的用户名)
//     user: 'root',
//     //  password：密码。默认是没有的 
//     password: '',
//     // database：数据库的名字
//     database: 'blog'
// });
// 建立链接池子
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
});

// function getUsers() {
//     // 异步操作
//     return new Promise((resolve, reject) => {
//         // connection.connect(); //打开这个链接
//         // 链接查询
//         // query方法：两个参数，第一个参数MySQL查询语句，第二个参数：回调函数
//         // 回调函数中有俩参数，第一个参数：error，第二参数：返回的结果
//         connection.query(
//             'select * from t_user',
//             function (error, results) {
//                 if(error) {
//                     reject(error);
//                 } else {
//                     resolve(results);
//                 }
//             }
//         );
//         // 关闭结束链接
//         // connection.end();
//     })
// }

// function getUser(userId){
//     // 异步操作
//     return new Promise((resolve, reject) => {
//         // connection.connect(); //打开这个链接
//         // 链接查询
//         // query方法：两个参数，第一个参数MySQL查询语句，第二个参数：回调函数
//         // 回调函数中有俩参数，第一个参数：error，第二参数：返回的结果
//         connection.query(
//             'select * from t_user where user_id=' + userId,
//             function (error, results) {
//                 if(error) {
//                     reject(error);
//                 } else {
//                     resolve(results);
//                 }

//             }
//         );
//         // 关闭结束链接
//         // connection.end();
//     })
// }

// 优化（方式一：但还不够优化）
// function query(sql) {
//     // 异步操作
//     return new Promise((resolve, reject) => {
//         // connection.connect(); //打开这个链接
//         // 链接查询
//         // query方法：两个参数，第一个参数MySQL查询语句，第二个参数：回调函数
//         // 回调函数中有俩参数，第一个参数：error，第二参数：返回的结果
//         connection.query(sql,function (error, results) {
//                 if (error) {
//                     reject(error);
//                 } else {
//                     resolve(results);
//                 }

//             }
//         );
//     })
// }

// 方式二：继续优化，使用链接池
function query(sql) {
    // 异步操作
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) throw err; // not connected!

            // Use the connection
            connection.query(sql, function (error, results, fields) {
                // When done with the connection, release it.
                connection.release();

                // Handle error after the release.
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }

                // Don't use the connection here, it has been returned to the pool.
            });
        });
    })
}


router.get('/', async (ctx) => {
    let results = await query('select * from t_user');
    await ctx.render("users", {
        users: results,
    })
});
router.get('/userDetail', async (ctx) => {
    var param = ctx.query;
    let result = await query('select * from t_user where user_id=' + param.userId);
    console.log(result);
    await ctx.render("user-detail", {
        user: result[0]
    })
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')