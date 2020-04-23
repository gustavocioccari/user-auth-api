const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/auth')
const authConfig = require('../config/auth.json');

const User = require('../models/User');

const router = express.Router();

router.use(authMiddleware);

router.get('/',(req, res) => {
  res.send({ ok:true });
});

module.exports = app => app.use('/projects', router);