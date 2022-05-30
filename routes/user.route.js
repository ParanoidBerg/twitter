const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const router = Router()

router.post('/users', userController.postUser)
router.get('/users', userController.getUsers)
router.get('/users/:id', userController.getUserById)
router.delete('/users/:id', userController.deleteUser)
router.patch('/users/:id/twits', userController.addSave)

module.exports = router