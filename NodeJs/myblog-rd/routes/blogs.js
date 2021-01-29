const router = require('koa-router')()
// jsonwebtoken 最流行的跨域认证解决方案
let jwt = require('jsonwebtoken');

const { verfiyToken } = require('../auth')

router.prefix('/blog')

router.get("/list", verfiyToken,
  async (ctx, next) => {
    let blogs = [
      { blogId: 11, title: '标题11', content: "内容11", postTime: new Date() },
      { blogId: 22, title: '标题22', content: "内容22", postTime: new Date() },
      { blogId: 33, title: '标题33', content: "内容33", postTime: new Date() },
    ];
    ctx.body = {
      state: 'success',
      blogs
    };
  }
);

router.get("/detail", verfiyToken,
  async (ctx, next) => {

    let blog = {
      blog_id: ctx.query.blogId,
      title: '标题11',
      content: '内容11',
      post_time: new Date()
    };

    ctx.body = {
      state: 'success'
    };
  })

module.exports = router
