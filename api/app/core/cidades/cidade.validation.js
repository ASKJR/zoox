const { check } = require('express-validator');

exports.cidadeValidation = [
  check('nome')
    .trim()
    .not()
    .isEmpty()
    .withMessage('O nome do Cidade é obrigatório.'),
  check('_idEstado')
    .trim()
    .not()
    .isEmpty()
    .withMessage('O estadoId é obrigatório.'),
];
