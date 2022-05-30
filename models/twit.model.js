const mongoose = require("mongoose");

const twitSchema = mongoose.Schema({
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  text: String,
  likes: [
    {
      ref: "User",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
  
});

const Twit = mongoose.model("Twit", twitSchema);
module.exports = Twit;
