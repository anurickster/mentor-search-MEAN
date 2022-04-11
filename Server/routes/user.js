const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const asyncHandler = require('express-async-handler');

const { authenticateUser } = require('../middlewares/auth');

router.post(
  '/signup',
  asyncHandler(async (req, res) => {
    const user = await User.create(req.body);
    const token = user.getSignedJwtToken();
    res.status(201).json({ auth: true, token: token });
  })
);

router.post('/login', authenticateUser, async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const token = user.getSignedJwtToken();
  res.status(200).json({ auth: true, token: token });
});

module.exports = router;
