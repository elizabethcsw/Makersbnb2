
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// app.engine('html', require('ejs').renderFile);
app.set('views',  __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('home');

  // res.send('\n\nHellllllo!\n\n');
});

app.get('/users/new', (req, res, next) => {
  res.render('users/signup');
  // res.send('\n\nHellllllo!\n\n');
});

app.get('/sessions/new', (req, res, next) => {
  res.render('sessions/login');
  // res.send('\n\nHellllllo!\n\n');
});

app.get('/homepage', (req, res) => {
  res.send('\n\nHellllllo!\n\n');
});

app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});

// const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
