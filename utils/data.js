const { User, Thought, Reaction, Friend } = require("../models");
// const dateFormat = require ("./dateFormatter");

// console.log(dateFormat(Date.now()));

const userNameData = [
  "aaran",
  "aaren",
  "aarez",
  "aarman",
  "aaron",
  "aaron-james",
  "aarron",
  "aaryan",
  "aaryn",
  "aayan",
  "aazaan",
  "abaan",
  "abbas",
  "abdallah",
  "abdalroof",
  "abdihakim",
  "abdirahman",
  "abdisalam",
  "abdul",
  "abdul-aziz",
  "abdulbasir",
  "abdulkadir",
  "abdulkarem",
  "smith",
  "jones",
  "coollastname",
  "enter_name_here",
  "ze",
  "zechariah",
  "zeek",
  "zeeshan",
  "zeid",
  "zein",
  "zen",
  "zendel",
  "zenith",
  "zennon",
  "zeph",
  "zerah",
  "zhen",
  "zhi",
  "zhong",
  "zhuo",
  "zi",
  "zidane",
  "zijie",
  "zinedine",
  "zion",
  "zishan",
  "ziya",
  "ziyaan",
  "zohaib",
  "zohair",
  "zoubaeir",
  "zubair",
  "zubayr",
  "zuriel",
  "xander",
  "jared",
  "courtney",
  "gillian",
  "clark",
  "jared",
  "grace",
  "kelsey",
  "tamar",
  "alex",
  "mark",
  "tamar",
  "farish",
  "sarah",
  "nathaniel",
  "parker",
];

const thoughtData = [
  "Hello World",
  "Track miles walked",
  "Tracked Hikes to go on",
  "Email",
  "Newspaper",
  "Books",
  "Movies",
  "Baseball scores",
  "Camping",
  "Restaurant Locator",
  "Card game finder",
  "New car",
  "Weather today",
  "Chicken wing flavors",
  "Country music",
  "Vacation locations",
  "Basketball schedule",
  "News",
  "Live music finder",
  "Dog Parks",
  "Bike trails",
  "Geo Caching",
];

const reactionData = [
  "Cool",
  "Happy",
  "Awesome",
  "Lame",
  "Redo",
  "Try Again",
  "Nice Try",
  "Angry",
  "Sad",
  "Excited",
  "Joyful",
  "Fun",
  "Thumbs Up",
  "Thumbs Down",
];

// Get a random item given an array
// arr[n] gets the nth item in the array (example arr[2] gets the third item in the array)
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get a random user name
const getRandomUserName = function() {
  const username = getRandomArrItem(userNameData);
  
  // Remove the username from the list to prevent duplicates - https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript/5767357#5767357
  const arrayIndex = userNameData.indexOf(username);
  userNameData.splice(arrayIndex, 1);

  return username;
}

// Function to generate random reactions for a thought
const getRandomReactions = () => {
  const reactions = [];
  // Get a random number of reactions between 0 and 8
  const numberOfReactions = getRandomNumber(0, 8);
  for (let i = 0; i < numberOfReactions; i++) {
    reactions.push({
      reactionBody: getRandomArrItem(reactionData),
      userName: getRandomArrItem(userNameData),
    });
  }
  return reactions;
}

// Function to generate random thoughts that we can add to user object
const getRandomThoughts = (int, userName) => {
  const userThoughts = [];
  for (let i = 0; i < int; i++) {
    userThoughts.push({
      thoughtText: getRandomArrItem(thoughtData),
      userName: userName,
      reactions: getRandomReactions()
    });
  }
  return userThoughts;
};

// Get random number between two numbers - https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
const getRandomNumber = (lowNumber, highNumber) => {
  return Math.floor(Math.random() * (highNumber - lowNumber + 1) + lowNumber);
};

// Export the functions for use in seeds.js
module.exports = { getRandomUserName, getRandomThoughts, getRandomNumber };
