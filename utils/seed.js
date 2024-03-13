const connection = require("../config/connection");
const { User, Thought, Reaction, Friend } = require("../models");
// const { userData, thoughtsData, reactionData } = require("./d");
// const dateFormatter = require("./dateFormatter");
const { getRandomUserName, getRandomThoughts, getRandomNumber } = require("./data");

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

  // Create an empty array to hold users
  const users = [];
  const friends = [];

  // Loop 20 times, add users to the user array
  for (let i = 0; i < 20; i++) {
    const userName = getRandomUserName();
    const email = `${userName}@test.com`;
    
    // Create thoughts for the user
    // Set random number of thoughts between 0 and 5
    let numberOfThoughts = getRandomNumber(0, 5);
    console.log(numberOfThoughts);
    let thoughts = [];
    // If there's at least 1 thought, then GET random thought objects using a helper function, imported from ./test
    if (numberOfThoughts > 0) {
      thoughts = getRandomThoughts(numberOfThoughts);
    }
    //console.log(thoughts);
    const user = new User({
      username: userName,
      email: email,
      // friends: [],
      thoughts: thoughts
    });
    //await User.collection.insertOne(user);
    users.push(user);
  }

  for (let i = 0; i < users.length; i++) {
    // Get random number of friends between 0 and 7
    const numberOfFriends = getRandomNumber(0, 7);
    for (let j = 0; j < numberOfFriends; j++) {
      const randomUserIndex = getRandomNumber(0, users.length - 1);
      const friend = users[randomUserIndex];
      // If this index is not the current user index AND it hasn't already been added as a friend, add it to the user as a friend
      if (randomUserIndex != i && !users[i].friends.includes(friend._id)) {
        users[i].friends.push(friend);
      }
    }
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

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
