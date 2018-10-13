//======================
//     DEPENDENCIES
//======================
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
//step 4b - require the uplifts model to draw the variable Uplift
const Uplift = require('./models/uplifts.js');
//require seed data using a variable
const uplifts = require('./models/seed.js');

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

//use method override -> allows POST, PUT, and DELETE from a form
app.use(methodOverride('_method'));

//seed route
// app.get('/seed', (req, res) => {
//   Uplift.create(
//     [
//       {
//         "create": "Pleasant Encounters",
//         "expand": "My barista and I reconnected today after a long time"
//       },
//       {
//         "create": "Nature refresh",
//         "expand": "I sat at the foot of a tree today and listened"
//       },
//       {
//         "create": "Self-care",
//         "expand": "I took time out of a busy day to eat"
//       },
//       {
//         "create": "Gratitude",
//         "expand": "Today, I am deeply grateful for the air I breathe, the body I inhabit, and the people who share my life journey"
//       }
//     ]
//     (err, data) => {
//       res.redirect('/uplifts');
//   }
// )
// });

//======================
//       ROUTES
//======================
//localhost:3000 -> will reroute to 'products'
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//step 2 - create an INDEX ROUTE that will render created uplifts
// app.get('/uplifts/', (req, res) => {
//   res.render('index.ejs');
  // Uplift.find({}, (error, allUplifts) => {
  //   res.render('index.ejs', {
  //     uplifts: allUplifts
  //   });
  // });
// });

//step 1 - create a NEW ROUTE that will enable to create a new uplift
app.get('/new', (req, res) => {
  // res.send('new');
  res.render('new.ejs');
})

// step 2 - create an INDEX ROUTE that will render created uplifts
app.get('/uplifts/', (req, res) => {
  // Uplift.find({}, (error, allUplifts) => {
    res.render('index.ejs', {
      uplifts: uplifts
    //   uplifts: allUplifts
    // });
  });
});

//step 3 - create a CREATE ROUTE to send(post) data from new page to gallery
app.post('/uplifts', (req, res) => {
  // res.render('index.ejs', {
    // need a way to send info from form (req.body) of new page to the gallery
    uplifts.push(req.body);
    res.redirect('/uplifts');
});
// })

//step 7 - create a SHOW ROUTE
app.get('/uplifts/:id', (req, res) => {
//   res.render('show.ejs',
//   {
//     uplifts: uplifts[req.params.id]
//   });
// });
  Uplift.findById(req.params.id, (error, foundUplift) => {
    res.render('show.ejs',
    {
      uplift: foundUplift
    });
  });
});


//step 5 - create a PUT ROUTE to update objects found by id
//need to add uplift.id once seed data is added
app.put('/uplifts/:id', (req, res) => {
  Uplift.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
    res.redirect('/uplifts');
  });
});

//step 6 - create DELETE ROUTE
app.delete('/uplifts/:id', (req, res) => {
  // res.send('deleting');
  Uplift.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/uplifts');
  })
})

//step 4 - create an edit route to allow users to edit their uplifts
app.get('/uplifts/:id/edit', (req, res) => {
  //use findById to grab the individual data item
  Uplift.findById(req.params.id, (err, foundUplift) => {
    // res.send('edit');
    //render this item (found by its id) on the edit page
    res.render('edit.ejs',
    {
      uplift: foundUplift
    }
    );
  });
});

//======================
//      LISTENER
//======================
app.listen(PORT, () => console.log('Listening on port: ' + PORT));
