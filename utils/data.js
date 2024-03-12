const { User, Thought, Reaction, Friend } = require("../models");
// const dateFormat = require ('./dateFormatter');

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
  'Hello World',
  'Track miles walked',
  'Tracked Hikes to go on',
  'Email',
  'Newspaper',
  'Books',
  'Movies',
  'Baseball scores',
  'Camping',
  'Restaurant Locator',
  'Card game finder',
  'New car',
  'Weather today',
  'Chicken wing flavors',
  'Country music',
  'Vacation locations',
  'Basketball schedule',
  'News',
  'Live music finder',
  'Dog Parks',
  'Bike trails',
  'Geo Caching',
];

// Get a random item given an array
// arr[n] gets the nth item in the array (example arr[2] gets the third item in the array)
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get a random user name
const getRandomUserName = () => getRandomArrItem(userNames);

// Function to generate random thoughts that we can add to student object
const getRandomThoughts = (int, userId) => {
  const userThoughts = [];
  for (let i = 0; i < int; i++) {
    const thought = new Thought({
      thoughtText: getRandomArrItem(thoughts),
      userId: userId
    });
    //console.log(thought.thoughtText);
    userThoughts.push(thought);
  }
  return thoughts;
};
// Export the functions for use in seeds.js
module.exports = { getRandomUserName, getRandomThoughts };
