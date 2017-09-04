const Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('example.com', 3000);

describe('User visits signup page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/homepage', done);
  });

  describe('submits form', function() {

    // before(function(done) {
    //   browser
    //     .fill('email',    'zombie@underworld.dead')
    //     .fill('password', 'eat-the-living')
    //     .pressButton('Sign Me Up!', done);
    // });
    //
    // it('should be successful', function() {
    //   browser.assert.success();
    // });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see the homeage', function() {
      browser.assert.text('title', 'Index');
    });
  });
});


var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();

chai.use(chaiHttp);

describe('Blobs', function() {
  it('should list ALL blobs on /blobs GET');
  it('should list a SINGLE blob on /blob/<id> GET');
  it('should add a SINGLE blob on /blobs POST');
  it('should update a SINGLE blob on /blob/<id> PUT');
  it('should delete a SINGLE blob on /blob/<id> DELETE');
});
