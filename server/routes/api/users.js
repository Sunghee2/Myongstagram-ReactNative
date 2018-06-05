var express = require('express');
var db = require('../../models');
const asyncError = require('../../utils/async-error');
var router = express.Router();

module.exports = function(app) {
  router.post('/', asyncError(async(req, res, next) => {
    const email = req.body.email;
    const user = await db.User.findOne({where: {email: email}})
    if (user) {
      console.log("중복");
    } else {
      console.log("성공");
    }
  }));

  router.post('/new', asyncError(async (req, res, next) => {
    db.User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    }).then( user => {
      res.json(user.toJSON());
    }).catch( error => {
      if (error.name == 'SequelizeUniqueConstraintError') {
        return res.status(422).json({code: 101, message: 'username exists'});
      }
      next(error);
    });
  }));

  router.use(app.oauth.authenticate());
  router.use('/me', (req, res) => {
    res.json(req.locals.user);
  });
  router.get('/', asyncError(async (req, res, next) => {
    const users = await db.User.findAll({});
    res.json(users);
  }));
  return router;
}