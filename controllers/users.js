//depencies for users controller
const express = require('express');
const users = express.Router();
const User = require('../models/users.js');

//render the new users page
users.get('/new', (req, res) => {
  res.render('users/new.ejs');
});

//create a post route for user data
users.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    res.redirect('/uplifts/gallery');
  })
})

//export for later use
module.exports = users;
