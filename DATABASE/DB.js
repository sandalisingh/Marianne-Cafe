const { json } = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/CMS", { useNewUrlParser: true});

module.exports.BEVERAGES_DB = require('./MODELS/BEVERAGES_DB');
module.exports.QUICKBITES_DB = require('./MODELS/QUICKBITES_DB');
module.exports.MEALS_DB = require('./MODELS/MEALS_DB');
module.exports.DESSERTS_DB = require('./MODELS/DESSERTS_DB');
module.exports.MILKSHAKES_DB = require('./MODELS/MILKSHAKES_DB');
module.exports.USERS_DB = require('./MODELS/USERS_DB');
module.exports.ORDERS_DB = require('./MODELS/ORDERS_DB');



