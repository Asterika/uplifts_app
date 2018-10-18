//move all files from server.js to controllers, so server.js can focus on initializing
//controller now holds all routes to run

//DEPENDENCIES
const express = require('express');
const router = express.Router();
const Uplift = require('../models/uplifts.js');
const User = require('../models/users.js');
const upliftSeed = require('../models/seed.js');
const homepage_tiles_capture = [
  { img: '/images/captured - friends.jpg'},
  { img: '/images/captured - nature.jpg'},
  { img: '/images/connected - friends1.jpg'}
]
const homepage_tiles_celebrate = [
  { img: '/images/celebrated - danceoflife.jpg'},
  { img: '/images/create - art.jpg'},
  { img: '/images/played.jpg'}
]
const homepage_tiles_inspire = [
  { img: '/images/honored - silence.jpg'},
  { img: '/images/celebrated - life.jpg'},
  { img: '/images/marveled - cosmos.jpg'}
]

//export this module for later use
module.exports = router;

//ROUTES
// localhost:3000 -> will reroute to 'products'
router.get('/', (req, res) => {
  res.render('home.ejs', {
    homepage_tiles_capture: homepage_tiles_capture,
    homepage_tiles_celebrate: homepage_tiles_celebrate,
    homepage_tiles_inspire: homepage_tiles_inspire
    // homepage_tiles_celebrate: homepage_tiles_celebrate,
    // homepage_tiles_inspire: homepage_tiles_inspire
  });
});

// step 2 - create an INDEX ROUTE that will render created uplifts
router.get('/gallery', (req, res) => {
  // THIS IS HOW TO CREATE THE SHOW PAGE
  Uplift.find({}, (error, allUplifts) => {
    res.render('index.ejs', {
      uplifts: allUplifts,
      currentUser: req.session.currentUser
    });
  });
});

//seed route
router.get('/seed', (req, res) => {
  Uplift.create(upliftSeed, (err, data) => {
      res.redirect('/uplifts/gallery');
  }
);
});

//step 1 - create a NEW ROUTE that will enable to create a new uplift
router.get('/new', (req, res) => {
  // res.send('new');
  //redirect to new/adventured route
  res.render('new.ejs');
});

//create a new route to grab dropdown options, pair them with images, and render images that match option values
router.get('/new/:type', (req, res) => {
  res.render('new.ejs', {
    type: [req.params.type],
    img: [req.params.type].value
  });
});

//step 3 - create a CREATE ROUTE to send(post) data from new page to gallery
router.post('/gallery', (req, res) => {
    // need a way to send info from form (req.body) of new page to the gallery
    //2 LINES OF CODE BELOW THIS WORK!!!
    // uplifts.push(req.body);
    // res.redirect('/uplifts');
    //THESE 3 LINES OF CODE DO NOT WORK:
    Uplift.create(req.body, (err, createdUplift) => {
      // res.send(req.body);
      res.redirect('/uplifts/gallery');
    });
    // res.redirect('/uplifts');
});

//step 4 - create an edit route to allow users to edit their uplifts
router.get('/gallery/:id/edit', (req, res) => {
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

//step 6 - create DELETE ROUTE
router.delete('/gallery/:id', (req, res) => {
  // res.send('deleting');
  Uplift.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/uplifts/gallery');
  });
});

//step 7 - create a SHOW ROUTE
router.get('/:id', (req, res) => {
  Uplift.findById(req.params.id, (err, foundUplift) => {
    res.render('show.ejs',
    {
      uplift: foundUplift,
      currentUser: req.session.currentUser
    });
  });
});
//   res.render('show.ejs',
//   {
//     uplift: uplifts[req.params.id],
//     index: [req.params.id]
//   });
// });

//step 5 - create a UPDATE ROUTE to update objects found by id
//need to add uplift.id once seed data is added
router.put('/:id', (req, res) => {
  Uplift.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUplift) => {
    res.redirect('/uplifts/gallery');
  // uplifts[req.params.id] = req.body;
  // uplift[req.params.id] = req.body;
    // res.render('show.ejs', {
      // uplift: updatedUplifts
  });
});
// res.redirect('/uplifts/' + req.params.id);








// //localhost:3000 -> will reroute to 'products'
// router.get('/', (req, res) => {
//   res.send('Hello World!');
// });
//
// // step 2 - create an INDEX ROUTE that will render created uplifts
// router.get('/uplifts', (req, res) => {
//   Uplift.find({}, (error, allUplifts) => {
//     res.render('index.ejs', {
//       uplifts: allUplifts
//     });
//   });
// });
//
// //seed route
// router.get('/uplifts/seed', (req, res) => {
//   Uplift.create(uplifts,
//     (err, data) => {
//       res.redirect('/uplifts');
//   }
// )
// });
//
// //step 1 - create a NEW ROUTE that will enable to create a new uplift
// router.get('/new', (req, res) => {
//   // res.send('new');
//   //redirect to new/adventured route
//   res.render('new.ejs');
// });
//
// //create a new route to grab dropdown options, pair them with images, and render images that match option values
// // router.get('/new/:type', (req, res) => {
// //   //render requested items on a new page
// //   res.render('type.ejs', {
// //     //grab the type of uplift
// //     type: [req.params.type],
// //     //grab, by value, images associated with each type
// //     img: [req.params.type].value
// //   });
// // });
//
// //step 3 - create a CREATE ROUTE to send(post) data from new page to
// router.post('/uplifts', (req, res) => {
//     // need a way to send info from form (req.body) of new page to the
//     Uplift.create(req.body, (err, createdUplift) => {
//       //once uplift is created, redirect to main /index page
//       //MAKE SURE :TYPE = :TYPE OF CATEGORY FROM IMG OR DROPDOW
//       // res.redirect('/uplifts/new/:type');
//       res.redirect('/uplifts/');
//     });
// });
//
// //step 4 - create an edit route to allow users to edit their uplifts
// router.get('/uplifts/:id/edit', (req, res) => {
//   //use findById to grab the individual data item
//   Uplift.findById(req.params.id, (err, foundUplift) => {
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
// router.delete('/uplifts/:id', (req, res) => {
//   //find uplifts by id# and delete
//   Uplift.findByIdAndRemove(req.params.id, (err, data) => {
//     //once an uplift is deleted, redirect to /index page
//     res.redirect('/uplifts/');
//   });
// });
//
// //step 7 - create a SHOW ROUTE
// router.get('/uplifts/:id', (req, res) => {
//   //find uplifts by id#
//   Uplift.findById(req.params.id, (err, foundUplift) => {
//     //render each uplift on its individual show page
//     res.render('show.ejs',
//     {
//       uplift: foundUplift
//     });
//   });
// });
//
// //step 5 - create a UPDATE ROUTE to update objects found by id
// router.put('/uplifts/:id', (req, res) => {
//   //find each uplift by id# and update
//   Uplift.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUplift) => {
//     //once uplift is updated, redirect to /index page
//     res.redirect('/uplifts/');
//   });
// });
