const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contact');

router.post('/', contactoController.registrarContacto);

module.exports = router;
