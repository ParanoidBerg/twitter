const User = require("../models/user.model");

module.exports.userController = {
  postUser: (req, res) => {
    User.create({
      name: req.body.name,
    })
      .then(() => {
        res.json("юзер добавлен");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  addSave: (req, res) => {
    User.findByIdAndUpdate(req.params.id, { $push: { saves: req.body.saves } })
      .then(() => {
        res.json("сохранено");
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  getUsers: (req, res) => {
    User.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err.message);
      });
  },
  getUserById: (req, res) => {
    User.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err.message));
  },
  deleteUser: (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err.message));
  },
};
