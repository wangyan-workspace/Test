const blogModel = require("../model/blogModel");

module.exports = {
    postBlog: async function (ctx, next) {
        let { title, content, userId } = ctx.request.body;
        let results = await blogModel.saveBlog(title, content, userId);
        if (results.insertId > 0) {
            ctx.body = {
                state: "success",
            };
        } else {
            ctx.body = {
                state: "fail",
            };
        }
    },
    listBlog: async function (ctx, next) {
        try {
            let results = await blogModel.getBlogs();
            if (results.length > 0) {
                ctx.body = {
                    state: "success",
                    blogs: results,
                };
            } else {
                ctx.body = {
                    state: "fail"
                }
            }
        } catch (err) {
            ctx.status = 500;
            console.log(err)
        }
    },
    getBlogDetail: async function (ctx, next) {
        // console.log(ctx.query); //{ blogId: '8'}
        let { blogId } = ctx.query;
        let results = await blogModel.getBlogById(blogId);
        console.log(results);
        /*
            [
                RowDataPacket {
                    blog_id: 2,
                    title: 'ccc',
                    content: 'ddd',
                    post_time: 2020-10-23T12:08:45.000Z,
                    user_id: 2,
                    comm_id: 1,
                    comm_content: 'haha',
                    comm_post_time: 2021-01-19T05:06:03.000Z,
                    username: 'wangwu'
                },
                RowDataPacket {
                    blog_id: 2,
                    title: 'ccc',
                    content: 'ddd',
                    post_time: 2020-10-23T12:08:45.000Z,
                    user_id: 2,
                    comm_id: 3,
                    comm_content: 'hoho',
                    comm_post_time: 2021-01-19T05:09:57.000Z,
                    username: '111'
                }
            ]
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
            /*
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
            ctx.body = {
                state: "success",
                blogInfo
            }

        } else {
            ctx.body = {
                state: "fail"
            }
        }
    }
}