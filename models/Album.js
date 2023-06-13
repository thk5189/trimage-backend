const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  name: String,
  images: [String],
  title: String,
});


const Album = mongoose.model("Album", AlbumSchema);

module.exports = Album;
