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

  router.post('/:id', asyncError(async (req, res, next) => {
    let updateValues = {
      content: req.body.content
    };
    console.log("content" + req.body.content);
    db.Post.update(
      updateValues, 
      { where: { id: req.params.id }}
    ).then( user => {
      console.log(user);
      return res.json({code: 200, message: '성공적으로 수정하였습니다.'});
    }).catch( error => {
      next(error);
    })
  }))

  router.delete('/:id', asyncError(async (req, res, next) => {
    db.Post.destroy({
      where: { id: req.params.id }
    }).then( result => {
      return res.json({code: 200, message: '성공적으로 삭제하였습니다.'});
    }).catch( error => {
      next(error);
    })
  }))

  return router;
}