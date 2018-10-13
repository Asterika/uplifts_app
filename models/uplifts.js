//require mongoose
const mongoose = require('mongoose');
//create new schema
const upliftSchema = new mongoose.Schema(
  {
  type: String,
  description: String,
  img: String
},
  ({ timestamps: true }));

//convert schema into model
const Uplift = mongoose.model('Uplift', upliftSchema);

//export log to use it later
module.exports = Uplift;
