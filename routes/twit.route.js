const { Router } = require("express");
const { twitController } = require("../controllers/twits.controller");
const router = Router()

router.post('/twits', twitController.postTwit)
router.delete('/twits/:id', twitController.deleteTwit)
router.get('/twits', twitController.getTwits)
router.get('/twits/:id', twitController.getTwitById)
router.patch('/twits/like/:id', twitController.like)

module.exports = router