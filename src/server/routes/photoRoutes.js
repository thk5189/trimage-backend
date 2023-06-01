const express = require('express');
const router = express.Router();
const Photo = require('../models/Photo');

// Upload a new photo
router.post('/photos', async (req, res) => {
  try {
    const { title, description, imageURL, albumId } = req.body;
    const photo = new Photo({ title, description, imageURL, album: albumId });
    await photo.save();
    res.status(201).json(photo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all photos
router.get('/photos', async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific photo
router.get('/photos/:id', async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    res.json(photo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a specific photo
router.put('/photos/:id', async (req, res) => {
  try {
    const { title, description, imageURL, albumId } = req.body;
    const photo = await Photo.findByIdAndUpdate(
      req.params.id,
      { title, description, imageURL, album: albumId },
      { new: true }
    );
    res.json(photo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a specific photo
router.delete('/photos/:id', async (req, res) => {
  try {
    const photo = await Photo.findByIdAndDelete(req.params.id);
    res.json(photo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
