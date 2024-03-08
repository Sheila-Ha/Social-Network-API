const mongoose = require("mongoose");

// Schema to create User model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true, 
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"],
    },
    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
  },
  {
    // Two schema options to transform Objects after querying MongoDB: toJSON and toObject
    // We want virtuals to be included in our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
// Create a virtual property `commentCount` that get the amount of comments per user
userSchema.virtual("friendCount")
// Getter
.get(function (){
  return this.friend.length;
});

//Initialize our User model
const User = mongoose.model("User", userSchema);

module.exports = User;