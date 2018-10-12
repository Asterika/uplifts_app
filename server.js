//======================
//     DEPENDENCIES
//======================
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;

//======================
//        PORT
//======================
//allow use of Heroku's port on local port
const PORT =  process.env.PORT || 3000;

//======================
//      DATABASE
//======================
//how to connect to db either via Heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'uplifts';

//connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

//error/success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//open the connection to Mongo
db.on('open', ()=>{});

//======================
//     MIDDLEWARE
//======================
//use public folder for static assets
app.use(express.static('public'));

//populates req.body with parsed info from forms
//if no data, forms will return an emtpy object {}
app.use(express.urlencoded({ extended:false }));

//returns middleware that only parses JSOn
app.use(express.json());

//use method override -> allows POST, PUT, and DELETE from a form
app.use(methodOverride('_method'));

//======================
//       ROUTES
//======================
//localhost:3000 -> will reroute to 'products'
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//step 1 - create a NEW ROUTE that will enable to create a new uplift
app.get('/uplifts/new', (req, res) => {
  // res.send('new');
  res.render('new.ejs');
})

//step 2 - create an INDEX ROUTE that will render created uplifts
app.get('/uplifts/gallery', (req, res) => {
  // res.send('gallery');
  res.render('gallery.ejs');
})

//step 4 - create an edit route to allow users to edit their uplifts
app.get('/uplifts/:id/edit', (req, res) => {
  res.send('edit');
})

//step 3 - create a CREATE ROUTE to send(post) data from new page to gallery
app.post('/uplifts/gallery', (req, res) => {
  res.send('hi');
  //need a way to send info from form (req.body) of new page to the gallery
  // req.body.push
})

//======================
//      LISTENER
//======================
app.listen(PORT, () => console.log('Listening on port: ' + PORT));
