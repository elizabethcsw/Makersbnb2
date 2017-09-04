
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

app.get('/signup', (req, res, next) => {
  res.render('signup');
  // res.send('\n\nHellllllo!\n\n');
});

app.get('/login', (req, res, next) => {
  res.render('login');
  // res.send('\n\nHellllllo!\n\n');
});

app.get('/homepage', (req, res) => {
  res.send('\n\nHellllllo!\n\n');
});

app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});
