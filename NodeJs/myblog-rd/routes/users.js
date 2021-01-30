const router = require('koa-router')()
const userController = require('../controllers/userController');

router.prefix('/user')

router.post('/login', userController.login)

module.exports = router
