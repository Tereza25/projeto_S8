const express = require('express');
const rout = express.Router();
const controller = require('../controller/musicasJanetController');
const route = require('./musicasRoutes');

route.get('/musicasJanet', controller.getAll);

module.exports = route