const userModel = require("../model/userModel");
const { createToken } = require("../auth")

module.exports = {
    login: async function (ctx, next) {
        // 1.接数据
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
    }
}