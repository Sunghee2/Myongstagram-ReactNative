const express = require('express');
const router = express.Router();
const basicAuth = require('express-basic-auth');

router.use(basicAuth({
  users: { 'admin': 'supersecret' },
  challenge: true,
  realm: 'AdminSample',
}));

router.use('/oauth', require('./oauth'));

module.exports = router;
