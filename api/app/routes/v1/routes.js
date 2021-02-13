const express = require('express');

const router = express.Router();

const estados = require('../../core/estados/estado.routes');
const cidades = require('../../core/cidades/cidade.routes');

router.use('/estados', estados);
router.use('/cidades', cidades);

module.exports = router;
