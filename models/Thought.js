// Require schema, types, and model from mongoose
const { Schema, Types, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Construct a new instance of the schema class to create Post model
const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 280,
    },
    userName: {
      type: String,
      require: true,
      trim: true,
    },    
    // Use built in data method to get current date
    createAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toISOString(),
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);
// Create a virtual property `getTags` that gets the amount of tags associated with an application
thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize Thought model
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
//module.exports = thoughtSchema;
