const Listing = require('../models').Listing;

module.exports = {
  create(req, res, next) {
    console.log("...Trying to add a row in listing");
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
      .then(function(listing) {
        // res.status(201).send(user);
        console.log("...Added a row in the Listings table!");
        // req.session.user = "happy";
        // req.session.user = user.dataValues;
        // console.log(user.dataValues.id);
        // console.log("end");
        // req.session.testing = {test: 100}
        // console.log(req.session.user);
        res.redirect('/');
      })
      .catch(error => res.status(400).send(error));
      },

  list(req, res) {
  return Listing
    .all()
    .then(listings => res.status(200).send(listings))
    .catch(error => res.status(400).send(error));

  },
};

// INSERT INTO "Listings"("id","name","location","createdAt","updatedAt") VALUES (DEFAULT,'1','2','2017-09-06 15:03:44.497 +00:00','2017-09-06 15:03:44.497 +00:00') RETURNING *;
