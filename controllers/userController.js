const { User, Thought } = require("../models");
// const userController = 


module.exports = {

  // Get all users
  async getUsers(req, res) {
    try {
      const dbUserData = await User.find().populate("friends");

      // const dbUserObj = {
      //   dbUserData,
      //   friends: await friendCount()

      // }
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
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
      // Get the user ID to update thoughts
      let dbUserData = await User.findOne({ _id: req.params.userId });
      const originalUsername = dbUserData.username;

      // Update the user
      dbUserData = await User.findOneAndUpdate(
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

      // If a username was passed in and the user was found, update username for thoughts and reactions
      if(req.body.username != undefined && originalUsername != undefined) {
        // Update any thoughts by the original username
        await Thought.updateMany(
          { userName: originalUsername },
          {
            userName: req.body.username,
          },
        );
        
        // Update any reactions by the original username
      //   await Thought.updateMany(
      //     { "reactions.userName": { $in: [originalUsername]} },
      //     {
      //       $set: { 'reactions.$[x].userName': req.body.username }
      //     },
      //     {
      //       "arrayFilters": [
      //         { "x.userName": { $in: [originalUsername]} }
      //       ]
      //     }        
      //   );

      
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Delete user (bonus - delete a user's associated thought when deleted)
  async deleteUser(req, res) {
    try {
      const dbUserData = await User.findOneAndDelete({ _id: req.params.userId });

      if (!dbUserData) {
        return res.status(404).json({ message: `No such user exists` });
      }

      // Bonus get ids of user's thought and delete them all
      await Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
      res.json({ message: `User has been deleted` });
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

  // Delete friend from friends list
  async deleteFriend(req, res) {
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

