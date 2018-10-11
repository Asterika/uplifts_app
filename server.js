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
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'uplifter';

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

//======================
//      LISTENER
//======================
app.listen(PORT, () => console.log('Listening on port: ' + PORT));
