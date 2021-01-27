const userModel = require('../model/userModel');

module.exports = {
    async listUsers(ctx){
        // 1.接收数据
        // 2.安全验证
        // 3.连接数据库
        let results = await userModel.getAllUsers();
        // 4.根据上一步数据库操作的结果，控制提示什么样的信息（或者向哪个页面跳转或重定向）
        if(results.length > 0){//说明查到结果了
            await ctx.render('index.ejs',{
                // xxx: results  //此处xxx是传递的数据名称
                users: results
            })
        }
    }
}