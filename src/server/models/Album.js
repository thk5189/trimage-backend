const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  coverImage: { type: String }, // Path or URL of the cover image
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
