var express = require('express');
var db = require('../../models');
const asyncError = require('../../utils/async-error');
var router = express.Router();

module.exports = function(app) {
  router.post('/', asyncError(async(req, res, next) => {
    const email = req.body.email;
    const account = await db.Account.findOne({where: {email: email}})
    if (account) {
      return res.status(422).json({code: 101, message: '이미 존재하는 이메일입니다.'})
    } else {
      return res.json({code: 200})
    }
  }));

  router.post('/new', asyncError(async (req, res, next) => {
    db.Account.create({
      email: req.body.email,
      password: req.body.password
    }).then( user => {
      db.User.create({
        id: user.dataValues.id,
        username: req.body.username,
        name: req.body.username
      }).then( result => {
        return res.json({code: 200, message: '회원가입에 성공하셨습니다.'});
      }).catch( error => {
        if (error.name == 'SequelizeUniqueConstraintError') {
          return res.status(422).json({code: 101});
        }
      })
    }).catch( error => {
      next(error);
    });
  }));

  router.use(app.oauth.authenticate());
  router.use('/me', asyncError(async (req, res) => {
    const user = await db.User.findOne({where: { id : res.locals.oauth.token.user.id }})
    res.json(user);
  }));

  router.get('/', asyncError(async (req, res, next) => {
    const users = await db.User.findAll({});
    res.json(users);
  }));
  
  router.post('/token', asyncError(async (req, res, next) => {
    let addToken = { pushToken: req.body.token };
    
    db.User.update(
      addToken,
      {where: {id: res.locals.oauth.token.user.id}}
    ).then( result => {
      return res.json(result);
    }).catch ( error => {
      next(error);
    })
  }));
  
  router.get('/:id/token', asyncError(async (req, res, next) => {
    const user = await db.User.findOne({ where: { id : req.params.id }});
    res.json(user.pushToken);
  }))

  router.post('/edit', asyncError(async (req, res, next) => {
    let updateValues = {
      username: req.body.username,
      name: req.body.name,
      profileImage: req.body.image
    };
    const user = await db.User.findOne({where : {id: res.locals.oauth.token.user.id}});
    user.update(
      updateValues, 
    ).then( result => {
      return res.json(user);
    }).catch( error => {
      next(error);
    })
  }));

  router.post('/search', asyncError(async (req, res, next) => {
    const users = await db.User.findAll({ where: {$or: [
      { username: { like: `%${req.body.searchValue}%`}},
      { name: { like: `%${req.body.searchValue}%`}}
    ]}});
    res.json(users);
  }));



  return router;
}