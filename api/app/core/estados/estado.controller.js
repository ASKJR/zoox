const Estado = require('../../models/estado');
const base = require('../../common/baseController');

exports.create = base.createOne(Estado);
exports.update = base.updateOne(Estado);
exports.delete = base.deleteOne(Estado);
exports.get = base.get(Estado);
