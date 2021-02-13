const Cidade = require('../../models/cidade');
const base = require('../../common/baseController');

exports.create = base.createOne(Cidade);
exports.update = base.updateOne(Cidade);
exports.delete = base.deleteOne(Cidade);
exports.get = base.get(Cidade);
