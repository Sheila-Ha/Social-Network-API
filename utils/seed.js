const connection = require("../config/connection");
const { User, Thought, Reaction, Friend } = require("../models");
// const { userData, thoughtsData, reactionData } = require("./d");
// const dateFormatter = require("./dateFormatter");
const { getRandomUserName, getRandomThoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("Connected to the database");

  // Delete the collection if they exist
  let thoughtsData = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtsData.length) {
    await connection.dropCollection("thoughts");
  }

  let userData = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userData.length) {
    await connection.dropCollection("users");
  }

  let reactionData = await connection.db
  .listCollections({ name: "reactions" })
  .toArray();
  if (reactionData.length) {
    await connection.dropCollection("reactions");
  }
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
  const users = [];
  const friends = [];

  // Loop 20 times, add users to the user array
  for (let i = 0; i < 20; i++) {
    const userName = getRandomUserName();
    const email = `${userName}@test.com`;
  
    /*const user = users.push({
      userName,
      email,
      // thoughts,
      // friends,
    });*/
    const user = new User({
      username: userName,
      email: email,
      // friends: [],
      // thoughts: []
    });
    await User.collection.insertOne(user);
    //await User.collection.insertMany(users);

    //console.log(user._id);

    // Create thoughts for the user
    // Set random number of thoughts between 0 and 5 - https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    var numberOfThoughts = Math.floor(Math.random() * (5 - 0 + 1) + 0);
    console.log(numberOfThoughts);
    // If there's at least 1 thought, then GET random thought objects using a helper function, imported from ./test
    if (numberOfThoughts > 0) {
      const thoughts = getRandomThoughts(numberOfThoughts, user._id);
      //console.log(thoughts);
      if (thoughts.length == 1) {
        await Thought.collection.insertOne(thoughts);
      }
      else {
        await Thought.collection.insertMany(thoughts);
      }
    }
  }

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

  //await User.collection.insertMany(users);
  //await Thought.collection.insertMany(thoughts);

  console.log("Data seeded");
  process.exit(0);  
});
