const jwt = require('jsonwebtoken');
require('dotenv').config();

const authUser = (req, res, next) => {
  const token = req.header('x-auth-token'); // We catch it from the header
  if (!token)
    return res.status(400).json({
      msg: `No token. 
            Automatic login disable. 
            *** Register or Login. ***`,
    });

  try {
    const decoded = jwt.verify(token, process.env.JWTSecret); // Verify token
    req.user = decoded; // Get information about user which was coded in token

    next(); // move to next peace of middleware
  } catch (e) {
    res.status(400).json({ msg: 'Token not valid.' });
  }
};

module.exports = authUser;
