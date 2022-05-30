const { Router } = require("express")
const { commentController } = require("../controllers/comments.controller")
const router = Router()

router.post('/comments', commentController.postComment)
router.delete('/comments/:id', commentController.deleteComment)
router.get('/comments', commentController.getComments)
router.get('/comments', commentController.getCommentByTwit)

module.exports = router
