const express = require('express');
const router = express.Router();
const asyncError = require('../../utils/async-error');
const db = require('../../models');

module.exports = function(app) {
  router.use(app.oauth.authenticate());

  router.get('/', asyncError(async (req, res) => {
    const posts = await db.Post.findAll({ include: { model: db.User }});
    res.json(posts);
  }));

  router.post('/new', asyncError(async (req, res, next) => {
    db.Post.create({
      userId: res.locals.oauth.token.user.id,
      image: req.body.image,
      context: req.body.context
    }).then( user => {
      return res.json({code: 200});
    }).catch( error => {
      console.log(error);
      next(error);
    });
  }));

  return router;
}