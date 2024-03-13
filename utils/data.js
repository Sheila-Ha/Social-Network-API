const { User, Thought, Reaction, Friend } = require("../models");
// const dateFormat = require ("./dateFormatter");

// console.log(dateFormat(Date.now()));

const userNames = [
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

const thoughts = [
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

// Get a random item given an array
// arr[n] gets the nth item in the array (example arr[2] gets the third item in the array)
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get a random user name
const getRandomUserName = function() {
  const username = getRandomArrItem(userNames);
  
  // Remove the username from the list to prevent duplicates - https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript/5767357#5767357
  const arrayIndex = userNames.indexOf(username);
  userNames.splice(arrayIndex, 1);

  return username;
}

// Function to generate random thoughts that we can add to user object
const getRandomThoughts = (int) => {
  const userThoughts = [];
  for (let i = 0; i < int; i++) {
    userThoughts.push({
      thoughtText: getRandomArrItem(thoughts),
    });
    // const thought = new Thought({
    //   thoughtText: getRandomArrItem(thoughts),
    // });
    //console.log(thought.thoughtText);
    // userThoughts.push(thought);
  }
  return userThoughts;
};
// Export the functions for use in seeds.js
module.exports = { getRandomUserName, getRandomThoughts };
