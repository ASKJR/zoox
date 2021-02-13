const mongoose = require('mongoose');

const { Schema } = mongoose;

// 2. Cidade:
// • id
// • nome
// • estadoId
// • data de criação
// • data da última alteração

const cidadeSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    _idEstado: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Estado',
    },
  },
  { timestamps: { createdAt: 'criado_em', updatedAt: 'atualizado_em' } }
);

cidadeSchema.statics.getModelName = function name() {
  return 'Cidade';
};

module.exports = mongoose.model('Cidade', cidadeSchema);
