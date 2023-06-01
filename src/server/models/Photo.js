const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageURL: { type: String },
  album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album' },
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
