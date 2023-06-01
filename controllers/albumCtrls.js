const db = require('../models')
// console.log(db)

const getAlbum = (req, res) => {
    // res.send('this is get album');
    db.Album.find({})
    .then((foundAlbum) => {
        if(!foundAlbum){
            res.status(404).json({message: 'Cannot find Album'})
        } else {
            res.status(200).json({data: foundAlbum})
        }
    })
}

  
  const createAlbum = (req, res) => {
    // res.send('this is create album');
    db.Album.create(req.body)
    .then((createdAlbum) => {
        if(!createdAlbum){
            res.status(400).json({message: 'Cannot create Album'})
        } else {
            res.status(201).json({data: createdAlbum, message: 'Album created'})
        }
    })
}
  
  module.exports = {
    getAlbum,
    createAlbum
  };
  