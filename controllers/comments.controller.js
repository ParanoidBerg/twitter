const Comment = require("../models/comment.model");

module.exports.commentController = {
  postComment: (req, res) => {
    Comment.create({
      twit: req.body.twit,
      user: req.body.user,
      text: req.body.text,
    })
      .then(() => {
        res.json("Коммент добавлен");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  deleteComment: (req, res) => {
    Comment.findByIdAndRemove(req.params.id)
      .then(() => res.json("Коммент удалён"))
      .catch((e) => res.json(e));
  },
  getComments: (req, res) => {
    Comment.find()
    .populate('twit')
    .populate('user')
    .then((data)=>{res.json(data)}).catch((err)=>{res.json(err.message)})
  },
  getCommentByTwit: (req, res) => {
      Comment.findById({twit: req.params.id})
      .populate('twit')
      .populate('user')
      .then((data)=>{res.json(data)}).catch((err)=>{res.json(err.message)})
  }
};
