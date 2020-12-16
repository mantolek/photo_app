const router = require('express').Router();
require('dotenv').config();
let User = require('../models/user.model');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authUser = require('../middleware/user.middleware');

router.use(cors());

/*
 * Auth
 * GET
 */
router.get('/auth', authUser, async (req, res) => {
  try {
    // req.user - taken from authUser
    const user = await User.findById(req.user.user.id).select('-password');
    if (!user) res.status(400).json({ msg: 'User Does not exist.' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/*
 * Register
 * POST
 */
router.post('/register', async (req, res) => {
  const { name, password } = req.body;

  try {
    if (!name || !password) {
      return res.status(400).json({ msg: 'Please enter all fields.' });
    }
    
    let user = await User.findOne({ name });
    
    if (user) {
      return res.status(400).json({ msg: 'User already exist 36837784.' });
    } else {
      user = new User({ name, password });
      
      const salt = await bcrypt.genSaltSync(10); // Hash password
      if (!salt) throw Error('Something went wrong with bcrypt.');

      user.password = bcrypt.hashSync(password, salt);
      const newUser = await user.save();
      if (!newUser) throw Error('Something went wrong with saving new user.')

      const payload = { user: { id: user.id } }; // Token 
      jwt.sign(
        payload,
        process.env.JWTSecret,
        {
          expiresIn: 3600, // 1 hour
        },
        (err, token) => {
          if (err) throw err;
          user.token = token;
          user.save();

          res.status(200).send({
            token,
            user: {
              name: user.name,
              id: user._id,
            },
          });
        }
      );
    }
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/*
 * Login
 * POST
 */

router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    if (!name || !password) {
      return res.status(400).json({ msg: 'Please enter all fields.' });
    }
    let user = await User.findOne({ name }); // Find user
    if (!user) return res.status(400).json({ msg: 'User does not exist.' });

    // Check given password with the password assign to the user
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials.' });

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWTSecret, {
      expiresIn: 3600,
    }); // Get new token
    if (!token) return res.send('Could not sign the token.');

    user.token = token;
    user.save();

    res.status(200).send({
      token,
      user: {
        name: user.name,
        id: user._id,
      },
    });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/*
 * LOGOUT USER
 * PUT
 */
router.put('/logout', async (req, res) => {
  try {
    const user = await User.findOne({ token: req.body.token });
    if (!user) res.status(400).json({ msg: 'User does not exist.' });
    user.token = undefined;
    user.save();

    res.status(200).json('token deleted');
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
