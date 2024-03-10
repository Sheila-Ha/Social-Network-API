const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { userData, thoughtData, reactionData } = require("./d");
const dateFormatter = require("./dateFormatter");
const { getRandomFriends, getThoughts } = require("./test");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  // Delete the collection if they exist
  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
  }

  let thoughtsCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection("thoughts");
  }

  // Create an empty array to hold users
  const users = [];
  const friends = [];

  // Loop 15 times, add users to the students array
  for (let i = 0; i < 15; i++) {
    // GEt random thought objects using a helper function, imported from ./test
    const thoughts = getThoughts();
    const userName = test.internet.userName();
    const email = test.internet.email();

    users.push({
      userName,
      email,
      thoughts,
      friends,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: "I love to play golf",
    createAt: 3 / 9 / 24,
    userName: users,
  });

  // Seed data to indicate what should appear in database
  console.table(users);
  console.info("Seeding complete");
  process.exit(0);
});
