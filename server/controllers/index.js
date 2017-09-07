// groups controllers (listings.js and users.js)
// controller gives direction to populate the rows with new objects

const users = require('./users');
const listings = require('./listings');

module.exports = {
  users,
  listings
};
