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

  // initial page load request
  app.get('/people', (req, res) => {
    console.log('get request initated');
    Person.find({}, (error, data) => {
      if (error) throw error;
      console.log("get data:", data);
      res.render('index', { people: data });
    });
  });

  app.post('/people', urlencodedParser, (req, res) => {
    console.log('post request initiated');
    var newPerson = Person(req.body).save((error, data) => {
      if (error) throw error;
      console.log("post data:", data);
      res.json(data);
    });
  });

  app.delete('/people/:item', (req, res) => {
    Person.find({item: req.params.item.replace(/\-/g, " ")}).remove( (error, data) => {
      if (error) throw error;
      res.json(data);
    });
  });
};