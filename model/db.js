let { host } = require('../const')
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = host;
db.categories = require("./category.js")(mongoose);

module.exports = db;
