const { Schema, Types } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionText: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 280,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    // Use built in data method to get current date
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

module.exports = reactionSchema;
