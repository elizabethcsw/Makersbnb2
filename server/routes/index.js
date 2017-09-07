
// const express = require('express');
// var models = require('../models');
// var cookieParser = require('cookie-parser')
// var session = require('express-session')
// const bodyParser = require('body-parser');
// const app = express();
// const port = process.env.PORT || 3000;
// const usersController = require('../controllers').users;
// const listingsController = require('../controllers').listings;
// const User = require('../models').User;
// const Listing = require('../models').Listing;

// // app.engine('html', require('ejs').renderFile);

// app.set('views',  __dirname + '/../views');
// app.set('view engine', 'ejs');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// // all post and get requests, sends them to index.js in controllers which uses listings.js and users.js controllers
// // render syntax is the link to the ejs files to render the views

// app.use(session({
//   key: 'user_sid',
//   secret: 'somerandomstuff',
//   resave: false,
//   cookie: {
//     expires: 600000
//   }
// }));
const express = require('express');
var models = require('../models');
var cookieParser = require('cookie-parser')
var session = require('express-session')
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const usersController = require('../controllers').users;
const listingsController = require('../controllers').listings;
const User = require('../models').User;
const Listing = require('../models').Listing;

// app.engine(‘html’, require(‘ejs’).renderFile);

app.set('views',  __dirname + '/../views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// all post and get requests, sends them to index.js in controllers which uses listings.js and users.js controllers
// render syntax is the link to the ejs files to render the views

app.use(session({
  key: 'user_sid',
  secret: 'somerandomstuff',
  resave: false,
  cookie: {
    expires: 600000
  }
}));

//homepage
app.get('/', (req, res, next) => {
  Listing.findAll().then(function(result) {
    res.render('home', {
      listingss: result
    });
  });
});

//fake homepage
app.get('/homepage', (req, res) => {
  res.send('\n\nHellllllo!\n\n');
});

app.get('/userhome', (req, res, next) => {
  User.findAll().then(function(result) {
    res.render('users/home', {
      userss: result
    });
  });
});

//user sign up
app.get('/users/new', (req, res, next) => {
  res.render('users/signup');
});

app.post('/users/new', usersController.create);
// app.get('/userhome', (req, res, next) => {
  // res.render('users/home') 
// })

//add listings
app.get('/listings/new', (req, res, next) => {
  res.render('listings/new');
});

app.post('/listings/new', listingsController.create);

//login
app.get('/sessions/new', (req, res, next) => {
    res.render('sessions/login');
    });

app.post('/sessions', usersController.check);

app.get('/sessions/success', (req, res, next) => {
  var userEmail = req.session.user.email;
  console.log("User info is saved in session.  Reading email address in routes/index.js:")
  console.log(userEmail)
  res.render('sessions/success', {
    userEmail: userEmail,
  });
});


// app.get('/listings', function(req, res, next) {
//   Listing.findAll().then(function(result) {
//     res.render('home', {
//       listingss: result
//     });
//   })
// });

//app.post('/users/new', usersController.create);
// listings = session user.create

  // console.log(listingss);
//   return Listing.findAll({
//   attributes: ['name', 'location']
// });


// app.get('/listings',listingsController.list);

//*** the below is wrong
// app.post('/listings/new', (req, res) => {
//   listingsController.create;
// });





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


