require("../env");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const ERROR_LOGIN = `You need to be logged in to access this route.`;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // authorization = 'Bearer 123token';

  if (!authorization) {
    return res.status(401).send({ error: ERROR_LOGIN });
  }

  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, process.env.SECRET_SIGN_KEY, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: ERROR_LOGIN });
    }

    try {
      const { userId } = payload;

      const user = await User.findById(userId);

      if (!user) {
        console.log("@auth", user);
        return res.status(401).send({ error: ERROR_LOGIN });
      }

      req.user = user;

      console.log("@auth", user);

      // TODO: When / If user is null throw error
      next();
    } catch (error) {
      return res
        .status(422)
        .send({ error: "There was an error finding your credentials" });
    }
  });
};
