const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// API - thoughts GET all and POST
router.route("/").get(getThoughts).post(createThought);

// API - thoughtId GET one thought, PUT and DELETE by thought ID
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .get(updateThought)
  .put(updateThought)
  .delete(deleteThought);

// API - thoughtId POST and DELETE thought/reaction by ID
router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
