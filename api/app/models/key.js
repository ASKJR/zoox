const mongoose = require('mongoose');

const { Schema } = mongoose;

const keySchema = new Schema(
  {
    apiKey: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: 'criado_em', updatedAt: 'atualizado_em' } }
);

module.exports = mongoose.model('Key', keySchema);
