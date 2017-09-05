const Listing = require('../models').Listing;

module.exports = {
  create(req, res, next) {
    return Listing
      .create({
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        price: req.body.price,
        available_dates: req.body.available_dates,
        reserve_status: req.body.reserve_status,
        confirm_status: req.body.confirm_status,
        userId: req.session.user.id,
      })
      .then(listing => res.status(201).send(listing))
      .catch(error => res.status(400).send(error));
      },

  list(req, res) {
  return Listing
    .all()
    .then(listings => res.status(200).send(listings))
    .catch(error => res.status(400).send(error));

  },
};
