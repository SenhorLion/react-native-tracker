require('./env');
// import all mongoose Models first
require('./models/User');
require('./models/Track');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoute');
const trackRoutes = require('./routes/trackRoute');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

// TODO: Use .env to store user | password
const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-tc3vy.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to Mongoose');
});

mongoose.connection.on('error', error => {
  console.error('Error Connecting to Mongoose', error);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Hello, you are authed! Your email is ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});
