const router = require('koa-router')()

const userController = require('../controller/userController')

router.get('/', userController.listUsers)

module.exports = router
