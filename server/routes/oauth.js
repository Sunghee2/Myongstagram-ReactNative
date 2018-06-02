const express = require('express');
const router = express.Router();
const asyncError = require('../utils/async-error');
const db = require('../models');
/* GET users listing. */
router.get('/', asyncError(async (req, res) => {
  const clients = await db.OAuthClient.findAll();
  res.render('oauth/index', { clients });
}));

module.exports = router;