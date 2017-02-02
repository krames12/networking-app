const express = require('express');
const networkingController = require('./controllers/networkingController');
const port = process.env.PORT || 8080;

const app = express();

// Set's Pug as the template engine
app.set('view engine', 'pug');

// static files
app.use(express.static('./public'));

networkingController(app);

app.listen(port);
console.log('now listening on port', port);