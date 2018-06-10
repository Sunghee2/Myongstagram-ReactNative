const express = require('express');
const router = express.Router();
const asyncError = require('../../utils/async-error');
const db = require('../../models');

module.exports = function(app) {
  router.use(app.oauth.authenticate());

  router.get('/', asyncError(async (req, res) => {
    const posts = await db.Post.findAll({ order: [ ['createdAt', 'DESC'] ],include: { model: db.User }});
    res.json(posts);
  }));

  router.post('/new', asyncError(async (req, res, next) => {
    db.Post.create({
      userId: res.locals.oauth.token.user.id,
      image: req.body.image,
      content: req.body.content
    }).then( post => {
      return res.json(post.dataValues);
    }).catch( error => {
      console.log(error);
      next(error);
    });
  }));

  router.get('/me', asyncError(async (req, res, next) => {
    const posts = await db.Post.findAll({ where: { userId : res.locals.oauth.token.user.id }, order: [ ['createdAt', 'DESC'] ]});
    res.json(posts);
  }));

  router.post('/search', asyncError(async (req, res, next) => {
    const posts = await db.Post.findAll({ where: { content: { like: `%${req.body.searchValue}%`}}, include: { model: db.User }});
    res.json(posts);
  }));

  router.post('/:id', asyncError(async (req, res, next) => {
    let updateValues = {
      content: req.body.content
    };
    const post = await db.Post.findOne({ where: { id: req.params.id } });
    post.update(
      updateValues, 
      { where: { id: req.params.id }}
    ).then( result => {
      return res.json(post);
    }).catch( error => {
      next(error);
    })
  }))

  router.delete('/:id', asyncError(async (req, res, next) => {
    const post = await db.Post.findOne({ where: { id: req.params.id }});
    post.destroy().then( result => {
      return res.json(post.dataValues);
    }).catch( error => {
      next(error);
    })
  }))

  router.get('/like/:id', asyncError(async (req, res, next) => {
    db.Like.create({
      postId: req.params.id,
      userId: res.locals.oauth.token.user.id
    }).then( post => {
      return res.json(post);
    }).catch( error => {
      console.log(error);
      next(error);
    }); 
  }));

  router.delete('/like/:id', asyncError(async (req, res, next) => {
    const like = await db.Like.findOne({ where: { postId: req.params.id, userId: res.locals.oauth.token.user.id}});
    like.destroy().then( result => {
      return res.json(like.dataValues);
    }).catch( error => {
      next(error);
    })
  }));

  return router;
}