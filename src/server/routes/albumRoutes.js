const express = require('express');
const router = express.Router();
const Album = require('../models/Album');

// Create a new album
router.post('/album', async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const album = new Album({ title, description, user: userId });
    await album.save();
    res.status(201).json(album);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all albums
router.get('/album', async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific album
router.get('/album/:id', async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    res.json(album);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a specific album
router.put('/album/:id', async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const album = await Album.findByIdAndUpdate(
      req.params.id,
      { title, description, user: userId },
      { new: true }
    );
    res.json(album);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a specific album
router.delete('/album/:id', async (req, res) => {
  try {
    const album = await Album.findByIdAndDelete(req.params.id);
    res.json(album);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
