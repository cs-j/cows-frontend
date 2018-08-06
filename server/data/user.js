let mongoose = require("mongoose");
let userSchema = mongoose.Schema({
    username: String,
    currentScore: Number,
    highScore: Number
});

module.exports = mongoose.model("user", userSchema);
