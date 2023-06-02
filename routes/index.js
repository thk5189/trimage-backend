const router = require('express').Router();
const albumRoute = require('./albumRoutes');


// URL DIRECTORY
router.use('/album', albumRoute);

module.exports = router;


