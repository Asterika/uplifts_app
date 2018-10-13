const mongoose = require('mongoose');

//create a schema to establish type of data input into forms
const upliftSchema = new mongoose.Schema({
  create: String,
  // img: String,
  expand: String
},
  { timestamps: true });

//convert schema into model
const Uplift = mongoose.model('Uplift', upliftSchema);

//export model for later use
module.exports = Uplift;
