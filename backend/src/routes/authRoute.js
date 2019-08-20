require('../env');
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log({ email, password });

    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_SIGN_KEY);

    res.send({ token });
  } catch (error) {
    return res.status(422).send(error.message);
  }
});

module.exports = router;
