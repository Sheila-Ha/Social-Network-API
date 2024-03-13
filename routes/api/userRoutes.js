const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// API - users GET all and POST
router.route("/").get(getUsers).post(createUser);

// API - userId GET one user, PUT and DELETE by users ID
router
  .route("/:userId")
  .get(getSingleUser)
  .get(updateUser)
  .put(updateUser)
  .delete(deleteUser);

// /API - userId/friends/:friendId POST and DELETE a friend by ID
router.route("/:userId/friend/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
