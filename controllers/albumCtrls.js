// const db = require('../models')
const getAlbum = (req, res) => {
    res.send('this is get album');
  };
  
  const createAlbum = (req, res) => {
    res.send('this is create album');
  };
  
  module.exports = {
    getAlbum,
    createAlbum
  };
  