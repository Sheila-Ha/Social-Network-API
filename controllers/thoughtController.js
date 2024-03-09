const { Thought, User } = require("../models");

const thoughtController = {
  //Get all thoughts
  async getThoughts(req, res) {
    try {
      const dbThoughtData = await Thought.find().sort({ createAt: -1 });
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Get a single thought by id
  async getSingleThought(req, res) {
    try {
      const dbThoughtData = await Thought.findOne({
        _id: req.params.thoughtId,
      });

      if (!dbThoughtData) {
        return res
          .status(404)
          .json({ message: "No through associated with this id" });
      }
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Create a thought
  async createThought(req, res) {
    try {
      const dbThoughtData = await Thought.create(req.body);

      const dbUserData = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: dbThoughtData._id } },
        { new: true }
      );

      let successMessage = `Thought created!`;
      let noUserIDFoundMessage = `Can not find this id, but thought created`;

      let message = { message: successMessage, thought: dbThoughtData };

      if (!dbUserData) {
        message = { message: noUserIDFoundMessage, help: `Can not find id` };
        return res.status(404).json(message);
      }

      res.json(message);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    const dbThoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!dbThoughtData) {
      return res.status(404).json({ message: `Can not find id` });
    }

    res.json(dbThoughtData);
    console.log(err);
    res.status(500).json(err);
  },

  // Delete thought
  async deleteThought(req, res) {
    try {
      const dbThoughtData = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!dbThoughtData) {
        return res.status(404).json({ message: `Can not find Id` });
      }

      // Remove through id from User's `thoughts` field
      const dbUserData = User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );

      if (!dbUserData) {
        return res
          .status(404)
          .json({ message: `Can not find this thought Id!` });
      }

      res.json({ message: `Thought removed.`, thought: dbThoughtData });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async addReaction(req, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!dbThoughtData) {
        return res.status(404).json({ message: `Can not find Id` });
      }

      res.json({ message: `Reacation added`, updatedThought: dbThoughtData });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async removeReaction(req, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!dbThoughtData) {
        return res.status(404).json({ message: `Can not find Id` });
      }

      res.json({
        message: `Reaction deleted`,
        updatedThought: dbThoughtData,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = thoughtController;
