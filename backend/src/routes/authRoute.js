const express = require('express');
const mongoose = require('mongoose');

const User = mongoose.model('User');
const router = express.Router();

router.post('/signup', (req, res) => {
  const { body } = req;
  console.log({ body });
  res.send('Posty posty');
});

module.exports = router;
