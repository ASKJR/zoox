const { Router } = require('express');
const EstadoController = require('./estado.controller');
const { estadoValidation } = require('./estado.validation');

const routes = Router();

routes.post('/', estadoValidation, EstadoController.create);
routes.put('/:id', estadoValidation, EstadoController.update);
routes.delete('/:id', EstadoController.delete);
routes.get('/', EstadoController.get);

module.exports = routes;
