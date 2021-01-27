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
        let results = await model.getBlogs();
        // 将session里的loginUser取出
        let loginUser = ctx.session.loginUser;
        //    console.log(results);
        await ctx.render("index", {
            blogs: results,
            user: loginUser
        });
    },
    async getBlogDetail(ctx) {
      // console.log(ctx.params); //{ blogId: '6'}
        let { blogId } = ctx.params;
        let results = await model.getBlogById(blogId);
        // console.log(results);
        /*
          [
            RowDataPacket {
              blog_id: 2,
              title: 'ccc',
              content: 'ddd',
              post_time: 2020-10-23T12:08:45.000Z,
              user_id: 5
            }
          ]
        */
       /*
          [
            {
              blog_id: 2,
              title: 'ccc',
              content: 'ddd',
              post_time: 2020-10-23T12:08:45.000Z,
              user_id: 5,
              comm_id: 1,
              comm_content: 'haha',
              comm_post_time: 2021-01-19T05:06:03.000Z
            },
            {
              blog_id: 2,
              title: 'ccc',
              content: 'ddd',
              post_time: 2020-10-23T12:08:45.000Z,
              user_id: 5,
              comm_id: 3,
              comm_content: 'hoho',
              comm_post_time: 2021-01-19T05:09:57.000Z,
            },
          ]
       */
      /*
          // 处理成
          {
            blog_id: 2,
            title: 'ccc',
            content: 'ddd',
            post_time: 2020-10-23T12:08:45.000Z,
            comments: [
              {
                comm_id: 1,
                comm_content: 'haha',
                comm_post_time: 2021-01-19T05:06:03.000Z,
                username: 'wangwu'
              },
              {
                comm_id: 3,
                comm_content: 'hoho',
                comm_post_time: 2021-01-19T05:09:57.000Z,
                username: '111'
              }
            ]
          }
      */
        if (results.length > 0) {
          // 将blog_id, title, content, post_time解构出来
          let { blog_id, title, content, post_time } = results[0];
          // 给blogInfo添加属性
          let blogInfo = {
            blog_id,
            title,
            content,
            post_time,
          };
          blogInfo.comments = [];
          for (let i = 0; i < results.length; i++) {
            let obj = results[i];
            blogInfo.comments.push({
              comm_id: obj.comm_id,
              comm_content: obj.comm_content,
              comm_post_time: obj.comm_post_time,
              username: obj.username
            });
          }
          console.log(blogInfo);
    
          await ctx.render("blog-detail", {
            blog: blogInfo,
          });
        }else{
          await ctx.render("error", {
            message: '该条文章不存在！'
          });
        }
      },

}