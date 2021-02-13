const mongoose = require('mongoose');

const { Schema } = mongoose;

// 1. Estado:
// • id
// • nome
// • abreviação (Ex. RJ, SP, etc)
// • data de criação
// • data da última alteração
const estadoSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    sigla: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: 'criado_em', updatedAt: 'atualizado_em' } }
);

estadoSchema.statics.getModelName = function name() {
  return 'Estado';
};

module.exports = mongoose.model('Estado', estadoSchema);
