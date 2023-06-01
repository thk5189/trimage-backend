const mongoose = require("mongoose")


const AlbumSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String,
  });
  
  const Album = mongoose.model("Album", AlbumSchema);
  
  module.exports = Album