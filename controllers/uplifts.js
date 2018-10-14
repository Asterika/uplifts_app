//move all files from server.js to controllers, so server.js can focus on initializing
//controller now holds all routes to run

//DEPENDENCIES
const express = require('express');
const router = express.Router();
const Uplift = require('../models/uplifts.js');

//move to bottom????????
module.exports = router;

//ROUTES
// step 2 - create an INDEX ROUTE that will render created uplifts
router.get('/uplifts', (req, res) => {
  //THIS IS HOW TO CREATE THE SHOW PAGE
    //finds all uplifts
  Uplift.find({}, (error, foundUplifts) => {
    //renders the index page
    console.log(foundUplifts);
    res.render('index.ejs', {
      //passed the found uplifts to the index page
      uplifts: foundUplifts
    });
  });
});


router.get('/seed', (req, res) => {
  Uplift.create(
    [
      {
        type: 'Adventured',
        img: '/images/adventured - unknown.jpg',
        description: 'Today, I stepped outside my door, not knowing where the path would go...'
      },
      {
        type: 'Honored',
        img: '/images/honored - spirit.jpg',
        description: 'Today, I honored my spirit by taking a moment to drink in nature and its gifts'
      },
      {
        type: 'Marveled',
        img: '/images/marveled - cosmos.jpg',
        description: 'Today, I marveled at the miracle of each tiny life in the vast infinite cosmos'
      }
    ],
    (err, data)=>{
      res.redirect('/fruits');
    }
  )
});

//step 1 - create a NEW ROUTE that will enable to create a new uplift
router.get('/new', (req, res) => {
  res.render('new.ejs');
});


//step 7 - create a SHOW ROUTE
router.get('/uplifts/:id', (req, res) => {
//   res.render('show.ejs',
//   {
    // uplifts: uplifts[req.params.id]
//   });
// });
  Uplift.findById(req.params.id, (err, foundUplift) => {
    res.render('show.ejs',
    {
      uplifts: foundUplift
    });
  });
});
//   res.render('show.ejs',
//   {
//     uplift: uplifts[req.params.id],
//     index: [req.params.id]
//   });
// });


//step 6 - create DELETE ROUTE
router.delete('/:id', (req, res) => {
  // res.send('deleting');
  Uplift.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/uplifts');
  });
});

//step 4 - create an edit route to allow users to edit their uplifts
router.get('/uplifts/:id/edit', (req, res) => {
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

//step 5 - create a PUT ROUTE to update objects found by id
//need to add uplift.id once seed data is added
router.put('/:id', (req, res) => {
  Uplift.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUplift) => {
    res.redirect('/uplifts');
  });
});
  // uplifts[req.params.id] = req.body;
  // uplift[req.params.id] = req.body;
//     res.render('show.ejs', {
//       uplift: updatedUplifts
//     });
//   });
// });
// res.redirect('/uplifts/' + req.params.id);

//plan: this will be the homepage that users get logged out to
// router.get('/', (req, res) => {
//   res.send('Hello World!');
// });

//step 2 - create an INDEX ROUTE that will render created uplifts
// app.get('/uplifts/', (req, res) => {
//   res.render('index.ejs');
  // Uplift.find({}, (error, allUplifts) => {
  //   res.render('index.ejs', {
  //     uplifts: allUplifts
  //   });
  // });
// });
