const router = require('express').Router();
const { albumCtrl } = require('../controllers') //all functions/methods imported from people's controller's index.js

// ROUTES - METHODS //
router.get('/', albumCtrl.getAlbum)
router.post('/', albumCtrl.createAlbum)

module.exports = router;