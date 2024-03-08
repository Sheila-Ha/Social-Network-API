// Require schema and model from mongoose
const mongoose = require("mongoose");
const reactionSchema = require("./Reaction");

// Construct a new instance of the schema class
const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 250,
    },
    // Use built in data method to get current date
    createAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toISOString(),
    },
    username: {
      type: String,
      require: true,
    },
    reactions: [reactionSchema],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Using mongoose.model() to compile a model based on the schema 'thoughtSchema
const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
