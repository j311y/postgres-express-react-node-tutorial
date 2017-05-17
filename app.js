const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./server/routes')(app);

// app.get('*', function(req, res) {
//   res.render('todos');
// });

app.get('/', (req, res) => {
  res.render('todos');
});



module.exports = app;
