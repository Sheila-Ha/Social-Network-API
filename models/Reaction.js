const { Schema, Types } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).itISOString(),
    },
  },
  {
    toJSON: {
      getter: true,
    },
    id: false,
  }
);

module.export = reactionSchema;
