const dateFormat = require ('./dateFormatter');

console.log(dateFormat(Date.now()));

const friends = [
    'Amy',
    'Ann',
    'Amos',
    'Beth',
    'Bob',
    'Bill',
    'Connie',
    'Conrad',
    'Cliff',
    'Dennis',
    'Dan',
    'Deb',
    'Edward',
    'Elizabeth',
    'Eddie',
    'Frank',
    'Fran',
    'Fiona',
    'Gill',
    'Gail',
    'George',
    'Herbert',
    'Halley',
    'Hal',
    'Ike',
    'Jake',
    'Jack',
    'Jackie',
    'Kale',
    'Karen',
    'Luke',
    'Lindsey',
    'Matt',
    'Mike',
    'Martha',
    'Neil',
    'Nathaniel',
    'Nicole',
    'Otis',
    'Parker',
    'Paige',
];

const thoughts = [
  'Hello World',
  'Track miles walked',
  'Tracked Hikes to go on',
  'Email',
  'Newspaper',
  'Books',
  'Movies',
  'App Baseball scores',
  'Camping',
  'Restaurant Locator',
  'Card game finder',
  'New car',
  'Weather App',
  'Chicken wing flavors',
  'Country music',
  'Vacation App',
  'App Basketball schedule',
  'News',
  'Live music finder',
];

// Get random item given an array
const getRandomArrItem = (arr) =>[Math.floor(Math.random() * arr.length)];

// Get random friend name
const getRandomFriends = () =>
  `${getRandomArrItem(friends)}}`;

// Function to generate random thoughts that can add to student object
const getThoughts = (int) => {
  const post =[];
  for (let i = 0; i < int; i++) {
    post.push({
      thoughts: getRandomArrItem(thoughts),
    });
  }
  return post;
};
// Export to use in seeds.js
module.exports = {getRandomFriends, getThoughts};