const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a schema for users to enter their login information
const userSchema = Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
