const express = require('express');
const networkingController = require('./controllers/networkingController');
const port = process.env.PORT || 8080;

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'things and stuff', message: 'ohai there'});
});

app.listen(port);

console.log('now listening on port', port);