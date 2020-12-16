const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const photoSchema = new Schema(
  {
    src: { type: String, required: true },
    user_id: { type: String, requied: true },
    download_list: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

const Photo = mongoose.model('photo', photoSchema);

module.exports = Photo;
