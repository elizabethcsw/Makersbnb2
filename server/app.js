//
// const express = require('express');
//
// const app = express();
// const port = process.env.PORT || 3000;
//
// // app.engine('html', require('ejs').renderFile);
// app.set('views',  __dirname + '/views');
// app.set('view engine', 'ejs');
//
// app.get('/', (req, res, next) => {
//   res.render('home');
//
//   // res.send('\n\nHellllllo!\n\n');
// });
//
// app.get('/users/new', (req, res, next) => {
//   res.render('users/signup');
//   // res.send('\n\nHellllllo!\n\n');
// });
//
// app.get('/sessions/new', (req, res, next) => {
//   res.render('sessions/login');
//   // res.send('\n\nHellllllo!\n\n');
// });
//
// app.get('/homepage', (req, res) => {
//   res.send('\n\nHellllllo!\n\n');
// });
//
// app.listen(port, () => {
//   console.log(`listening on port ${ port }`);
// });
