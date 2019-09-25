const mongoose = require('~/lib/mongoose');
const { Schema } = mongoose;

const Request = new Schema(
  {
    requester: {
      name: {
        type: String,
        required: true,
      },
    },
    description: {
      type: String,
      required: true,
    },
    media: [
      {
        url: String,
        type: {
          type: String,
          enum: ['image', 'video'],
        },
      },
    ],
  },
  {
    collection: 'request',
    id: true,
    timestamps: {
      createdAt: 'created',
      updatedAt: 'updated',
    },
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  },
);

delete mongoose.connection.models['Request']; // Prevent error "Cannot overwrite model once compiled"
const Model = mongoose.model('Request', Request);

module.exports = Model;
