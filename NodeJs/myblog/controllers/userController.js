// 对业务逻辑的处理
// 将对数据库的操作引入进来
// const db = require('../modules/database');
const model = require('../modules/userModel');

module.exports = {
    async login(ctx) {
        // ctx.request.body获取用户登录信息
        // console.log(ctx.request.body); //{ username: 'lisi', password: '123456' }
        //1.接收表单数据
        // 将获取的数据解构出来
        let { username, password } = ctx.request.body;
        // 2.安全验证
        // 3.连接数据库
        // let results = await getUserData(username, password);

        // 代码优化
        // let results = await db.query("select * from t_user where username=? and password=?", [username, password]);
        let results = await model.getUserByNameAndPassword(username, password)

        // 4.根据查询的结果跳转(或输出)不同的结果页面
        // console.log(results);
        if (results.length > 0) {
            // console.log('登陆成功！');
            // ctx.body = "登陆成功！" 
            // await ctx.render('index');  //这样没办法传递blogs参数

            // 向session作用域中存放loginUser变量
            ctx.session.loginUser = username;

            // redirect重定向：它会将页面的地址重新定向到指定的路由
            ctx.redirect("/")
        } else {
            // console.log('登录失败，用户名或密码不正确');
            // ctx.body = "登录失败，用户名或密码不正确"
            await ctx.render('error', {
                message: "登录失败，用户名或密码不正确"
            })
        }
    },
    async regist(ctx) {
        //1.接收表单数据
        // ctx.request.body获取用户注册信息
        // 将获取的数据解构出来
        let { username, password, nickname } = ctx.request.body;
        // 2.安全验证
        // trim()去掉空格
        if (username.trim().length == 0) {
            await ctx.render('error', {
                message: "用户名不能为空！"
            })
        } else if (password.trim().length == 0) {
            await ctx.render('error', {
                message: "密码不能为空！"
            })
        } else if (nickname.trim().length == 0) {
            await ctx.render('error', {
                message: "昵称不能为空！"
            })
        } else {
            // 3.连接数据库
            // let results = await saveUser({ username, password, nickname });

            // 代码优化
            // let results = await db.query("insert into t_user set ?", { username, password, nickname });
            let results = await model.saveUser({ username, password, nickname })

            // console.log(results);
            /*
                OkPacket {
                    fieldCount: 0,
                    affectedRows: 1,
                    insertId: 59,
                    serverStatus: 2,
                    warningCount: 0,
                    message: '',
                    protocol41: true,
                    changedRows: 0
                }
            */
            // 4.根据查询的结果跳转(或输出)不同的结果页面
            if (results.insertId) {
                // 通过判断insertId是不是有正常值，如果有，说明插入成功
                await ctx.render("login");
            } else {
                await ctx.render("error", {
                    message: "注册失败！"
                })
            }
        }
    },
    async checkUser(ctx) {
        // ctx.query：获取传递给路由/checkUser的参数
        // 将username解构出来
        let { username } = ctx.query;
        let results = await model.getUserByUsername(username);
        // console.log(results);
        /*
            [
                RowDataPacket {
                    user_id: 5,
                    username: 'lisi',
                    nickname: '李四',
                    password: '123456',
                    create_date: 2020-10-23T12:23:59.000Z
                }
            ]
        */ 
        if (results.length > 0) {
            ctx.body = 'fail';
        } else {
            ctx.body = 'success';
        }
    }
}