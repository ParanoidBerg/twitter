const Twit = require("../models/twit.model");

module.exports.twitController = {
  postTwit: (req, res) => {
    Twit.create({
      user: req.body.user,
      text: req.body.text,
    })
      .then(() => {
        res.json("Запощено");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  deleteTwit: (req, res) => {
    Twit.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Удалено");
      })
      .catch(() => {
        res.json(err.message);
      });
  },
  getTwits: (req, res) => {
    Twit.find()
      .populate("user")
      .populate("likes")
      .populate("comment")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  getTwitById: (req, res) => {
    Twit.findById(req.params.id)
    .populate("user")
    .populate("likes")
    .populate("comments")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err.message);
    });  
  },
  like: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id, { $push: { likes: req.body.likes } })
      .then(() => {
        res.json("лайкнуто");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
};
