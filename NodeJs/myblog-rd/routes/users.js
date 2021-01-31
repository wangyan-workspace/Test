const router = require('koa-router')()
const userController = require('../controllers/userController');

router.prefix('/user')

router.post('/login', userController.login)

router.get('/checkUser', userController.checkUser)

router.post('/regist', userController.regist)



module.exports = router
