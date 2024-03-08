const mongoose = require("mongoose");

// Schema to create Reaction model
const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 250,
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
