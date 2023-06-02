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
  // ALBUM UPDATE ROUTE
const updateAlbum = (req, res) => {
    db.Album.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedAlbum) => {
        if(!updatedAlbum){
            res.status(400).json({Message: 'Could not update Album'})
        } else {
            res.status(200).json({Data: updatedAlbum, Message: "Album updated"})
        }
    })
}

// ALBUM DESTROY ROUTE
const deleteAlbum = (req, res) => {
    db.Album.findByIdAndDelete(req.params.id)
    .then((deletedAlbum) => {
        if(!deletedAlbum){
            res.status(400).json({Message: 'Could not delete Album'})
        } else {
            res.status(200).json({Data: deletedAlbum, Message: "Album deleted"})
        }
    })
}
  module.exports = {
    getAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum
  };
  