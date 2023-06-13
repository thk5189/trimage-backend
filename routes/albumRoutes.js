const router = require('express').Router();
const { albumCtrl } = require('../controllers');

// Get all albums
router.get('/', albumCtrl.getAlbum);

// Create a new album
router.post('/', albumCtrl.createAlbum);

// Update an album
router.put('/:id', albumCtrl.updateAlbum);

// Delete an album
router.delete('/:id', albumCtrl.deleteAlbum);

// Get an album by ID
router.get('/:id', albumCtrl.getAlbumById);

// Add an image to an album
router.post('/:id/image', albumCtrl.addImageToAlbum);

module.exports = router;
