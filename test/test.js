var expect = require('chai').expect,
    assert = require('assert'),
    Browser = require('zombie'),
    browser = new Browser(),
    url = 'http://localhost:3000/';


var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/routes/index');
var should = chai.should();

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
  });

  describe('submits form', function() {
    it('fills in fields', function() {
      browser.fill('Username', 'pm')
      browser.fill('Name', 'Peter Malark')
      browser.fill('Email', 'hi@hi.com')
      browser.fill('Password', 'iheartke')
      browesr.fill('Password Confirmation', 'iheartke')
      browser.pressButton('Sign up')
      expect(browser.text('header')).to.contain('Hello Peter Malark');
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


