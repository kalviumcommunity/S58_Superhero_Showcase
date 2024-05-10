const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: String,
    password: String,
});

mongoose.pluralize(null);
const usersModel = mongoose.model("userinfo", usersSchema);

module.exports = usersModel;