const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const superheroSchema = new Schema({
  Superhero_Name: String,
  Category: String,
  First_appearance: String,
  Images: String,
  Created_by: String,
});

const SuperheroModel = mongoose.model("superheros", superheroSchema);

module.exports = SuperheroModel;