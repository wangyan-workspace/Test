const router = require('koa-router')()
const blogController = require('../controllers/blogController')

const { verfiyToken } = require('../auth')

router.prefix('/blog')

router.get("/list", verfiyToken,blogController.listBlog);

router.get("/detail", verfiyToken,blogController.getBlogDetail);
  // async (ctx, next) => {

  //   let blog = {
  //     blog_id: ctx.query.blogId,
  //     title: '标题11',
  //     content: '内容11',
  //     post_time: new Date()
  //   };

  //   ctx.body = {
  //     state: 'success',
  //     blog,
  //   };
  

  router.post('/post',blogController.postBlog);

module.exports = router
