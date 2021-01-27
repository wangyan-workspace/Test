// 对业务逻辑的处理
// 将对数据库的操作引入进来
// const db = require('../modules/database');
const model = require('../modules/blogModel');

module.exports = {
    async welcome(ctx) {
        // 查询所有文章数据
        //    let results = await getBlogData();

        // 代码优化
        // let results = await db.query("select * from t_blog");
        let results = await model.getBlog();
        // 将session里的loginUser取出
        let loginUser = ctx.session.loginUser;
        //    console.log(results);
        await ctx.render("index", {
            blogs: results,
            user: loginUser
        });
    },

}