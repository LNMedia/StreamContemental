const express = require('express');
const path = require('path');
const router = express.Router();

// Definiere die statischen Routen
router.use('/media', express.static(path.join(__dirname, '../resources/media')));
router.use('/styles', express.static(path.join(__dirname, '../resources/styles')));
router.use('/scripts', express.static(path.join(__dirname, '../resources/scripts')));
router.use('/fonts', express.static(path.join(__dirname, '../resources/fonts')));



// DO NOT TOUCH
module.exports = router;