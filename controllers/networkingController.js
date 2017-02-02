const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://test:test@ds139979.mlab.com:39979/networkingapp');

// schema creation for database entries
var personSchema = new mongoose.Schema({
  name: String,
  interests: String
});

var Person = mongoose.model('Person', personSchema);

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

};