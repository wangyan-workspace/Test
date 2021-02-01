const router = require('koa-router')()
const blogController = require('../controllers/blogController')

const { verfiyToken } = require('../auth')

router.prefix('/blog')

router.get("/list", verfiyToken,blogController.listBlog);

router.get("/detail", verfiyToken,blogController.getBlogDetail);

router.post('/post',blogController.postBlog);

router.get('/content',blogController.getBlogId);

router.post('/comment',blogController.postComment);

module.exports = router
