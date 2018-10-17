//depencies for users controller
const bcrypt = require('bcrypt');
const express = require('express');
const users = express.Router();
const User = require('../models/users.js');

//render the new users page
users.get('/new', (req, res) => {
  res.render('users/new.ejs', {
    currentUser: req.session.currentUser
  });
});

//create a post route for user data
users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (err, createdUser) => {
    res.redirect('/uplifts/gallery');
    currentUser: req.session.currentUser
  });
});

//export for later use
module.exports = users;
