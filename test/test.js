const User = require('../server/models').User;
var expect = require('chai').expect,
assert = require('assert'),
Browser = require('zombie'),
browser = new Browser(),
url = 'http://localhost:3000/';


var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/routes/index');
var should = chai.should();
var expect = require('chai').expect

chai.use(chaiHttp);

Browser.localhost('example.com', 3000);



describe('User visits signup page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('homepage loads', function() {

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see the homepage', function() {
      expect(browser.text('body')).to.include('Makersbnb');
    });
  });
});

describe('User can sign up', function() {

  const browser = new Browser();
  before(function(done) {
    browser.visit('/users/new', done);
    console.log(browser.location.href)
  });

  describe('submits form', function() {
    it('fills in fields', function(done) {
      browser.fill('username', 'pm');
      browser.fill('name', 'Peter Malark');
      browser.fill('email', 'hi@hi.com');
      browser.fill('pw', 'iheartke');
      browser.fill('pw2', 'iheartke');
      browser.pressButton('Sign up').then(function() {
        assert.ok(browser.success);
        assert.equal(browser.text('h3'), 'Hello Peter Malark');
      }).then(done, done);
    });
  });
});

describe('User can log in', function() {

  const browser = new Browser();

before(function(done) {
  User.create({
        username: 'KE',
        name: 'Katniss Everdeen',
        email: 'katniss@district12.com',
        pw: 12345,
      })
      .then(function(user) {
        browser.visit('/sessions/new', done);
      })
      .catch(error => res.status(400).send(error));
    });

describe('log in', function() {
  it('user can log in', function(done) {
    browser.fill('email', 'sam.ell@web.de');
    browser.fill('pw', '1234');
    browser.pressButton('Log in').then(function() {
      assert.equal(browser.text('h1'), 'You have logged in as sam.ell@web.de!');
    }).then(done, done);
    });
  });
});






// describe('User can sign up', function() {

//   const browser = new Browser();

//   before(function(done) {
//     browser.visit('/users/new', done);
//   });

//   describe('submits form', function() {

//     it('fills in fields', function() {
//       browser.fill('username', 'pm')
//       browser.fill('name', 'Peter Malark')
//       browser.fill('email', 'hi@hi.com')
//       browser.fill('pw', 'iheartke')
//       browser.pressButton('Sign up')
//       expect(browser.text('body')).to.include('Peter Malark');
//     });
//   });
// });
