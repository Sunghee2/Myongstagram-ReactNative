var express = require('express');
var db = require('../../models');
const asyncError = require('../../utils/async-error');
var router = express.Router();

module.exports = function(app) {
  router.post('/', asyncError(async(req, res, next) => {
    const email = req.body.email;
    const user = await db.User.findOne({where: {email: email}})
    if (user) {
      return res.status(422).json({code: 101, message: '이미 존재하는 이메일입니다.'})
    } else {
      return res.json({code: 200})
    }
  }));

  router.post('/new', asyncError(async (req, res, next) => {
    db.User.create({
      email: req.body.email,
      username: req.body.username,
      name: req.body.username,
      password: req.body.password
    }).then( user => {
      return res.json({code: 200, message: '회원가입에 성공하셨습니다.'});
    }).catch( error => {
      if (error.name == 'SequelizeUniqueConstraintError') {
        return res.status(422).json({code: 101, message: '사용자이름이 이미 존재합니다.'});
      }
      next(error);
    });
  }));

  router.use(app.oauth.authenticate());
  router.use('/me', asyncError(async (req, res) => {
    const user = await db.User.findOne({where: { id : res.locals.oauth.token.user.id }})
    const posts = await db.Post.findAll({ where: { userId: res.locals.oauth.token.user.id }})
    console.log(user+posts);
    res.json({
      user: user,
      posts: posts
    });
  }));

  router.get('/', asyncError(async (req, res, next) => {
    const users = await db.User.findAll({});
    res.json(users);
  }));

  router.post('/edit', asyncError(async (req, res, next) => {
    let updateValues = {
      username: req.body.username,
      name: req.body.name,
      profileImage: req.body.profileImage
    };

    db.User.update(
      updateValues, 
      { where: { id: res.locals.oauth.token.user.id }}
    ).then( user => {
      return res.json({code: 200, message: '성공적으로 수정하였습니다.'});
    }).catch( error => {
      next(error);
    })
  }));


  return router;
}