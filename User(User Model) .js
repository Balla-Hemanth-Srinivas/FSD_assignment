const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  domain: String,
  gender: String,
  availability: String,
  avatar: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
