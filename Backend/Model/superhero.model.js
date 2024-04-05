const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const superheroSchema = new Schema({
  Superhero_Name: String,
  Category: String,
  First_appearance: String,
  Images: String,
});

const SuperheroModel = mongoose.model("superheroe", superheroSchema);

module.exports = SuperheroModel;