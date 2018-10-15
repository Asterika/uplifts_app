// //==========================
// //        REVISED
// //==========================
// //2ND ITERATION OF SERVER.JS CODE WITH ALL ROUTES
// //UPDATED TO REFLECT /GALLERY/ FOR INDEX page
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
//
// //==========================
// //        ORIGINAL
// //==========================
// //1ST ITERATION OF SERVER.JS CODE WITH ALL ROUTES
// //original routes code transferred from server.js to controllers/uplifts.js
//
// //ROUTES
// //localhost:3000 -> will reroute to 'products'
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
//
// // step 2 - create an INDEX ROUTE that will render created uplifts
// app.get('/uplifts', (req, res) => {
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
//       res.redirect('/uplifts');
//   }
// )
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
//   })
// })
//
// //step 3 - create a CREATE ROUTE to send(post) data from new page to gallery
// app.post('/uplifts', (req, res) => {
//     // need a way to send info from form (req.body) of new page to the gallery
//     //2 LINES OF CODE BELOW THIS WORK!!!
//     // uplifts.push(req.body);
//     // res.redirect('/uplifts');
//     //THESE 3 LINES OF CODE DO NOT WORK:
//     Uplift.create(req.body, (err, createdUplift) => {
//       // res.send(req.body);
//       res.redirect('/uplifts');
//     });
//     // res.redirect('/uplifts');
// });
//
// //step 4 - create an edit route to allow users to edit their uplifts
// app.get('/uplifts/:id/edit', (req, res) => {
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
// app.delete('/uplifts/:id', (req, res) => {
//   // res.send('deleting');
//   Uplift.findByIdAndRemove(req.params.id, (err, data) => {
//     res.redirect('/uplifts');
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
//     res.redirect('/uplifts');
//   // uplifts[req.params.id] = req.body;
//   // uplift[req.params.id] = req.body;
//     // res.render('show.ejs', {
//       // uplift: updatedUplifts
//   });
// });
// // res.redirect('/uplifts/' + req.params.id);
