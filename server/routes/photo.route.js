const router = require('express').Router();
require('dotenv').config();
let Photo = require('../models/photo.model');
let User = require('../models/user.model');
const cors = require('cors');
const authUser = require('../middleware/user.middleware');

router.use(cors());

/**
 * Create photo
 * POST
 */
router.post('/savePhoto', authUser, async (req, res) => {
  const { src, user, download_list } = req.body;
  const { name } = user;

  try {
    if (!src) {
      return res.status(400).json({ msg: 'Image missing.' });
    }
    const user = await User.findOne({ name: name }).select('-password');
    if (!user) return res.status(400).json({ msg: 'User does not exist.' });
    
    const newPhoto = new Photo({
      src: src,
      user_id: user.id,
      download_list: download_list,
    });

    const photo = await newPhoto.save();

    res.status(200).json(photo);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/**
 * Get all photos
 * GET
 */
router.get('/getPhotos', authUser, async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).json(photos)

  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/**
 * Get user photos
 * POST
 */
router.post('/getMyPhotos', authUser , async (req, res) => {
  const {name} = req.body;

  try {
    const user = await User.findOne({ name: name }).select('-password');
    if (!user) res.status(400).json({ msg: 'User Does not exist.' });
    
    const photos = await Photo.find();
    if (!photos) res.status(400).json({ msg: 'No photos found.' });
    
    let result = await photos.filter(photo => photo.user_id === user.id)
    if (!result) res.status(400).json({ msg: 'User does not have photos.' });

    res.status(200).json(result)
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

/**
 * Overwrite photo
 * PUT
 */
router.put('/overwritePhoto', authUser, async (req, res) => {
  const { id,list, src } = req.body;
  try {
    const photo = await Photo.findOne({ _id: id });
    if (!photo) res.status(400).json({ msg: 'Photo does not exist.' });

    photo.src = src;
    photo.download_list = list;
    photo.save();

    res.status(200).json('Photo overwritten')
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

module.exports = router;
