const { check } = require('express-validator');

exports.estadoValidation = [
  check('nome')
    .trim()
    .not()
    .isEmpty()
    .withMessage('O nome do Estado é obrigatório.'),
  check('sigla')
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 2, max: 2 })
    .withMessage('A sigla do Estado só poderá ser composta por 2 caracteres.'),
];
