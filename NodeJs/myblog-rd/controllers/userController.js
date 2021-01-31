const userModel = require("../model/userModel");
const { createToken } = require("../auth")

module.exports = {
    login: async function (ctx, next) {
        // 1.接数据 post方式传递参数时，使用ctx.request.body接收参数
        let { username, password } = ctx.request.body;
        // 2.验证

        // 3.连接数据库
        let results = await userModel.getByNameAndPassword(username, password);
        // 4.根据数据库操作的结果，返回响应的信息
        if (results.length > 0) {
            // 登陆成功
            // 生成Token
            let payload = {
                userId: Math.random(),
                username,
            };
            var token = createToken(payload);
            ctx.body = {
                state: "success",
                token,
                user: results[0]
            };
        } else {
            ctx.body = {
                state: "fail"
            }
        }
    },
    regist: async function (ctx, next) {
        // 1.接数据 post方式传递参数时，使用ctx.request.body接收参数
        let { username, password, nickname } = ctx.request.body;
        // 2.验证
        if (username.trim().length == 0) {
            ctx.body = {
                state: "no username"
            }
        } else if (password.trim().length == 0) {
            ctx.body = {
                state: "no password"
            }
        } else if (nickname.trim().length == 0) {
            ctx.body = {
                state: "no nickname"
            }
        } else {
            let results = await userModel.saveUser({ username, password, nickname });
            // console.log(results.insertId);
            if (results.insertId > 0) {
                ctx.body = {
                    state: "success"
                }
            } else {
                ctx.body = {
                    state: "fail"
                }
            }
        }
    },
    checkUser: async function (ctx, next) {
        // ctx.query：获取传递给路由/user/checkUser的参数
        // 将username解构出来
        let { username } = ctx.query;
        let results = await userModel.getUserByUsername(username);
        console.log(results)
        if (results.length > 0) {
            ctx.body = {
                state: "fail"
            }
        } else {
            ctx.body = {
                state: "success"
            }
        }
    }
}