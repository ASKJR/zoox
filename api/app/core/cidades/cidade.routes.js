const { Router } = require('express');
const CidadeController = require('./cidade.controller');
const { cidadeValidation } = require('./cidade.validation');

const routes = Router();

routes.post('/', cidadeValidation, CidadeController.create);
routes.put('/:id', cidadeValidation, CidadeController.update);
routes.delete('/:id', CidadeController.delete);
routes.get('/', CidadeController.get);

module.exports = routes;
