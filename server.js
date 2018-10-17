//ORDER FOLLOWS MONGOOSE_STORE
//======================
//     DEPENDENCIES
//======================
const express = require('express');
const app = express();
const session = require('express-session');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const db = mongoose.connection;
//step 4b - require the uplifts model to draw the variable Uplift
const Uplift = require('./models/uplifts.js');
//require seed data using a variable
const uplifts = require('./models/seed.js');
//require users controller
const usersController = require('./controllers/users.js');
//require sessions controller
const sessionsController = require('./controllers/sessions.js');
//require the controllers uplifts
const upliftsController = require('./controllers/uplifts.js');


//======================
//        PORT
//======================
//allow use of Heroku's port on local port
const PORT =  process.env.PORT || 3000;

//======================
//      DATABASE
//======================
//how to connect to db either via Heroku or locally
//can add 27017 to localhost
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'uplifts';

//connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, {});
// mongoose.connect(uri, { useFindAndModify: false });
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

//error/success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//open the connection to Mongo
db.on('open', ()=>{});

//=========================
//        SEED DATA
//=========================
// Uplift.create(upliftSeed, (error, data) => {
//   if(error) console.log(error.message);
//   console.log('added uplift data');
// })

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

app.use(session({
  secret: "magicalunicorns",
  resave: false,
  saveUninitialized: false
}));

//use method override -> allows POST, PUT, and DELETE from a form
app.use(methodOverride('_method'));

//tell server.js to use this controllers file as middleware for users
app.use('/users', usersController);

//tell server.js to use this controller as file as middleware for sessions
app.use('/sessions', sessionsController);

//tell server.js to use this controllers file as middleware
app.use('/uplifts', upliftsController);

//WELCOME ROUTE for logged in users
app.get('/', (req, res) => {
  //NOT SURE IF INDEX OR HOME NEEDS TO BE RENDERED HERE
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  });
});


//======================
//       ROUTES
//======================
//create a model with a creator
app.post('/articles', (req, res) => {
  req.body.author = req.session.currentUser.username;
  Article.create(req.body, (err, createdArticle) => {
    res.redirect('/articles');
  });
});


// // localhost:3000 -> will reroute to 'products'
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
//
// // step 2 - create an INDEX ROUTE that will render created uplifts
// app.get('/gallery', (req, res) => {
//   // THIS IS HOW TO CREATE THE SHOW PAGE
//   Uplift.find({}, (error, allUplifts) => {
//     res.render('index.ejs', {
//       uplifts: allUplifts
//     });
//   });
// });
//
// //seed route
// app.get('/uplifts/seed', (req, res) => {
//   Uplift.create(uplifts,
//     (err, data) => {
//       res.redirect('/uplifts/gallery');
//   }
// );
// });
//
// //step 1 - create a NEW ROUTE that will enable to create a new uplift
// app.get('/new', (req, res) => {
//   // res.send('new');
//   //redirect to new/adventured route
//   res.render('new.ejs');
// });
//
// //create a new route to grab dropdown options, pair them with images, and render images that match option values
// app.get('/new/:type', (req, res) => {
//   res.render('new.ejs', {
//     type: [req.params.type],
//     img: [req.params.type].value
//   });
// });
//
// //step 3 - create a CREATE ROUTE to send(post) data from new page to gallery
// app.post('/gallery', (req, res) => {
//     // need a way to send info from form (req.body) of new page to the gallery
//     //2 LINES OF CODE BELOW THIS WORK!!!
//     // uplifts.push(req.body);
//     // res.redirect('/uplifts');
//     //THESE 3 LINES OF CODE DO NOT WORK:
//     Uplift.create(req.body, (err, createdUplift) => {
//       // res.send(req.body);
//       res.redirect('/gallery');
//     });
//     // res.redirect('/uplifts');
// });
//
// //step 4 - create an edit route to allow users to edit their uplifts
// app.get('/gallery/:id/edit', (req, res) => {
//   //use findById to grab the individual data item
//   Uplift.findById(req.params.id, (err, foundUplift) => {
//     // res.send('edit');
//     //render this item (found by its id) on the edit page
//     res.render('edit.ejs',
//     {
//       uplift: foundUplift
//     }
//     );
//   });
// });
//
// //step 6 - create DELETE ROUTE
// app.delete('/gallery/:id', (req, res) => {
//   // res.send('deleting');
//   Uplift.findByIdAndRemove(req.params.id, (err, data) => {
//     res.redirect('/gallery');
//   });
// });
//
// //step 7 - create a SHOW ROUTE
// app.get('/uplifts/:id', (req, res) => {
// //   res.render('show.ejs',
// //   {
//     // uplifts: uplifts[req.params.id]
// //   });
// // });
//   Uplift.findById(req.params.id, (err, foundUplift) => {
//     res.render('show.ejs',
//     {
//       uplift: foundUplift
//     });
//   });
// });
// //   res.render('show.ejs',
// //   {
// //     uplift: uplifts[req.params.id],
// //     index: [req.params.id]
// //   });
// // });
//
// //step 5 - create a UPDATE ROUTE to update objects found by id
// //need to add uplift.id once seed data is added
// app.put('/uplifts/:id', (req, res) => {
//   Uplift.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUplift) => {
//     res.redirect('/uplifts/gallery');
//   // uplifts[req.params.id] = req.body;
//   // uplift[req.params.id] = req.body;
//     // res.render('show.ejs', {
//       // uplift: updatedUplifts
//   });
// });
// // res.redirect('/uplifts/' + req.params.id);

//======================
//      LISTENER
//======================
app.listen(PORT, () => console.log('Listening on port: ' + PORT));
