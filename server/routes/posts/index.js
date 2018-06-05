const express = require('express');
const router = express.Router();
const asyncError = require('../../utils/async-error');
const db = require('../../models');

// router.get('/', asyncError(async (req, res) => {
//   const posts = await db.Post.findAll();
//   res.json(posts.toJSON());
// }));