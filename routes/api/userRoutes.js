const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// API, users GET all and POST
router.route("/").get(getUsers).post(createUser);

// API/users/: userId GET one user, PUT and DELETE by user's ID
router
  .route("/:userId")
  .get(getSingleUser)
  .get(updateUser)
  .put(updateUser)
  .delete(deleteUser);

// /API/User/:userId/friends/:friendId POST and DELETE a friend by ID
router.route("/:userId/friend/;friendId").post(addFriend).delete(removeFriend);

module.exports = router;
