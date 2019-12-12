const express = require('express');
const router = express.Router();
const quotesRoutes = require('./quotes_routes');

router.use('/quotes', quotesRoutes);

module.exports = router;