const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { userData, thoughtsData, reactionData } = require("./d");
const dateFormatter = require("./dateFormatter");
const { getRandomFriends, getRandomThoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("Connected to the database");

  let thoughtsData = await connection.db
    .listenCollections({ name: "thought" })
    .toArray();
  if (thoughtsData.length) {
    await connection.dropCollection("thought");
  }

  let userData = await connection.db
    .listCollections({ name: "user" })
    .toArray();
  if (userData.length) {
    await connection.dropCollection("user");
  }

  await User.collection.insetMany(users);
  await Thought.collection.insertMany(thoughts);

  console.log("Data seeded");
  process.exit(0);

  // Delete the collection if they exist
  // let userCheck = await connection.db
  //   .listCollections({ name: "users" })
  //   .toArray();
  // if (userCheck.length) {
  //   await connection.dropCollection("users");
  // }

  // let thoughtsCheck = await connection.db
  //   .listCollections({ name: "thoughts" })
  //   .toArray();
  // if (thoughtsCheck.length) {
  //   await connection.dropCollection("thoughts");
  // }

  // Create an empty array to hold users
  // const users = [];
  // const friends = [];

  // Loop 20 times, add users to the students array
  // for (let i = 0; i < 20; i++) {
  // GEt random thought objects using a helper function, imported from ./test
  // const thoughts = getRandomThoughts();
  // const userName = test.internet.userName();
  // const email = test.internet.email();

  //   users.push({
  //     userName,
  //     email,
  //     thoughts,
  //     friends,
  //   });
  // }

  // Add users to the collection and await the results
  // await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  // await Thought.collection.insertOne({
  //   thoughtText: "I love to play golf",
  //   createAt: 3 / 9 / 24,
  //   userName: users,
  // });

  // Seed data to indicate what should appear in database
  // console.table(users);
  // console.info("Seeding complete");
  // process.exit(0);
});
