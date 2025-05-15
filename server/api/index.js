// server/api/index.js
const express = require('express');
const router  = express.Router();

const weatherRoute = require('./weather');
router.use('/weather', weatherRoute);

module.exports = router;
