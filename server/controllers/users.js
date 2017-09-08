const User = require('../models').User;

module.exports = {
  create(req, res, next) {
    return User
      .create({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        pw: req.body.pw,
      })
      .then(function(user) {
        // res.status(201).send(user);
        console.log("...Trying to save user to session");
        // req.session.user = "happy";
        req.session.user = user.dataValues;
        // console.log(user.dataValues.id);
        // console.log("end");
        // req.session.testing = {test: 100}
        console.log("User is saved in session as:");
        console.log(req.session.user);
        console.log("end");
        res.redirect('/userhome');
      })
      .catch(error => res.status(400).send(error));
      },

  list(req, res) {
  return User
    .all()
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));

  },

  check(req, res) {
  return User
    .findOne({
      where: {
              email: req.body.email,
              pw: req.body.pw
            }
    })
    .then(function(user) {
      console.log("...Found a matching user!");
      req.session.user = user.dataValues;
      // console.log(user.dataValues);
      // req.session.testing = {test: 100}
      res.redirect('/sessions/success');
    })
    .catch(error => res.status(400).send(error));
  },
};
