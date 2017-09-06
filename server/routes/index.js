
const express = require('express');
var models = require('../models');
var cookieParser = require('cookie-parser')
var session = require('express-session')
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const usersController = require('../controllers').users;
const listingsController = require('../controllers').listings;

// app.engine('html', require('ejs').renderFile);

app.set('views',  __dirname + '/../views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  key: 'user_sid',
  secret: 'somerandomstuff',
  resave: false,
  cookie: {
    expires: 600000
  }
}));

app.get('/', (req, res, next) => {
  res.render('home');
  // res.send('\n\nHellllllo!\n\n');
});

app.get('/users/new', (req, res, next) => {
  res.render('users/signup');
});

app.get('/sessions/new', (req, res, next) => {
  res.render('sessions/login');
});

app.get('/homepage', (req, res) => {
  res.send('\n\nHellllllo!\n\n');
});

app.get('/listings/new', (req, res, next) => {
  res.render('listings/new');
});

app.get('/listings', (req, res, next) => {
  res.send('\n\nThese are all the listings\n\n');
});

app.get('/listing', usersController.list);
app.post('/listing/:userId/items', listingsController.create);


app.post('/users/new', usersController.create);

app.get('/testing', function (req, res) {
  if(req.session.isVisit) {
    req.session.isVisit++;
    req.session.testing = {test: 100}
    console.log(req.session.testing)
    res.send('<p>This is the ' + req.session.isVisit + ' time you visit this page</p>');
  } else {
    req.session.isVisit = 1;
    res.send("Welcome, this is your first visit");
    console.log(req.session);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});
