const db = require('../models');

const getAlbum = (req, res) => {
  db.Album.find({})
    .then((foundAlbum) => {
      if (!foundAlbum) {
        res.status(404).json({ message: 'Cannot find Album' });
      } else {
        res.status(200).json({ data: foundAlbum });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
};

const createAlbum = (req, res) => {
  db.Album.create(req.body)
    .then((createdAlbum) => {
      if (!createdAlbum) {
        res.status(400).json({ message: 'Cannot create Album' });
      } else {
        res.status(201).json({ data: createdAlbum, message: 'Album created' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
};

const updateAlbum = (req, res) => {
  db.Album.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedAlbum) => {
      if (!updatedAlbum) {
        res.status(400).json({ Message: 'Could not update Album' });
      } else {
        res.status(200).json({ Data: updatedAlbum, Message: 'Album updated' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
};

const deleteAlbum = (req, res) => {
  db.Album.findByIdAndDelete(req.params.id)
    .then((deletedAlbum) => {
      if (!deletedAlbum) {
        res.status(400).json({ Message: 'Could not delete Album' });
      } else {
        res.status(200).json({ Data: deletedAlbum, Message: 'Album deleted' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
};

const getAlbumById = (req, res) => {
    db.Album.findById(req.params.id)
      .then((foundAlbum) => {
        if (!foundAlbum) {
          console.log('Album not found:', req.params.id);
          res.status(404).json({ message: 'Cannot find Album' });
        } else {
          console.log('Found album:', foundAlbum);
          res.status(200).json({ data: foundAlbum });
        }
      })
      .catch((error) => {
        console.error('Error fetching album:', error);
        res.status(500).json({ message: 'Internal server error' });
      });
  };
  
const addImageToAlbum = (req, res) => {
  db.Album.findById(req.params.id)
    .then((album) => {
      if (!album) {
        res.status(404).json({ message: 'Cannot find Album' });
      } else {
        album.images.push(req.body.image);
        album
          .save()
          .then((updatedAlbum) => {
            res.status(200).json({ data: updatedAlbum, message: 'Image added to Album' });
          })
          .catch((error) => {
            res.status(500).json({ message: 'Internal server error' });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
};

module.exports = {
  getAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum,
  getAlbumById,
  addImageToAlbum,
};
