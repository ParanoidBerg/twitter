const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  twit: {
    ref: "Twit",
    type: mongoose.SchemaTypes.ObjectId,
  },
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  text: String,
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
