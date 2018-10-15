//require mongoose
const mongoose = require('mongoose');
//create new schema
const upliftSchema = new mongoose.Schema(
  {
  //assign each uplift a designated type
  type: String,
  //assign each image a value field in order to match img-value with the object-value from the dropdown menu
  img: {
    image: String,
    value: String
  },
  description: String,
},
  ({ timestamps: true }));

//convert schema into model
const Uplift = mongoose.model('Uplift', upliftSchema);

//export log to use it later
module.exports = Uplift;
