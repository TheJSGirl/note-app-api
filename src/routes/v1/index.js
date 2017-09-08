const mainRoutes = require('express').Router();
const noteRoutes = require('./noteRoutes');

mainRoutes.use('/notes', noteRoutes);

module.exports = mainRoutes;