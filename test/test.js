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
    // browser.visit('/', done);
    // browser.pressButton('Sign Up');
    // browser.fill('username', 'pm');
    // browser.fill('name', 'Peter Malark');
    // browser.fill('email', 'hi@hi.com');
    // browser.fill('pw', 'iheartke');
    // browser.fill('pw2', 'iheartke');
    // browser.pressButton('Sign up');
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
  //     browser.visit('/userhome', done)
  //     console.log(browser.location.href)
  //     expect(browser.html()).to.have.string('Hello Peter Malark');
  //   });
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
