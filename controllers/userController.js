const { User, Thought } = require("../models");

const userController = {
  // Get all users
  async getUsers(req, res) {
    try {
      const dbUserData = await User.find().populate("friends");

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Get single user by Id
  async getSingleUser(req, res) {
    try {
      const dbUserData = await User.findOne({ _id: req.params.userId })
        // version key
        .select("-__v")
        .populate("friends")
        .populate("thoughts");

      if (!dbUserData) {
        return res.status(404).json({ message: `No user with this Id!` });
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Update a user
  async updateUser(req, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

      if (!dbUserData) {
        return res.status(404).json({ message: `No user with this Id!` });
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Delete user (bonus - remove a user's associated thought when deleted)
  async deleteUser(req, res) {
    try {
      const dbUserData = await User.findOneAndDelete({
        _id: req.params.userId,
      });

      if (!dbUserData) {
        return res.status(404).json({ message: `No user with this Id!` });
      }

      // Bonus get ids of user's thought and delete them all
      await Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
      res.json({ message: `No user with this Id ` });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Add a friend to friend list
  async addFriend(req, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );

      if (!dbUserData) {
        return res.status(404).json({ message: ` No user with this Id!` });
      }
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Remove friend from friends list
  async removeFriend(req, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      if (!dbUserData) {
        return res.status(404).json({ message: `No user with this Id!` });
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
