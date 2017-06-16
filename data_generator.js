/*
  This generates our fake newsfeed information.

  There is no need to touch the code in here, but please check it out
  to familiarize yourself.
*/

window.bacefook = {};
bacefook.newsfeed = [];
bacefook.friends = {};
bacefook.friends.brent = [];
bacefook.friends.rachel = [];
bacefook.friends.kani = [];
bacefook.friends.yan = [];
window.friends = Object.keys(bacefook.friends);

var getRandomElement = function (array) {
  // Given an array, returns a random element
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

var starters = ['totally just', 'just', 'completely', 'waaaaah! i', 'i just', 'a salaryman', 'a salaryman', 'yesterday I', 'a ninja', 'my boss'];
var verbs = ['ate', 'drank', 'threw up in', 'refactored', 'iterated on', 'thought about', 'threw up on', 'saw', 'walked to', 'got lost in', 'walked into', 'pooped in', 'peed in', 'googled', 'drove', 'ran to', 'worked on', 'slept on', 'slept in'];
var fillers = ['my', 'your', 'his', 'her', 'my favorite', 'a beautiful', 'a delicious', 'that', 'this', 'an interesting', '', 'the best', 'the greatest', 'a delightful'];
var nouns = ['code chrysalis', 'restaurant', 'omakase', 'hitomedia', 'family mart', 'private jet', 'mama', 'lawsons', 'conbini', 'whisky', 'onigiri', 'tesla', 'food', 'house', 'toilet', 'tokyo', 'city', 'iphone', 'google', 'unicorn', 'mess', 'pirate ship', 'ninja'];
var hashtags = ['#codechrysalis', '#techlife', '#startups', '#tokyo', '#japan', '#interesting', '', '#til', '#wtf', '#tgifriday', '#hashtags', '#japanlife', '#oops'];
var feelings = ['happy', 'smug', 'lovestruck', 'gross', 'scared', 'shitty', 'angry', 'frustrated', 'excited', '']
var images = [];

var generateRandomText = function () {
  return [getRandomElement(starters), getRandomElement(verbs), getRandomElement(fillers), getRandomElement(nouns), getRandomElement(hashtags)].join(' ');
};

var generatePostObj = function () {
  return {
    friend: getRandomElement(friends),
    text: generateRandomText(),
    feeling: getRandomElement(feelings),
    image: getRandomElement(images),
    timestamp: new Date(),
  };
};

var addPost = function (obj) {
  var friend = obj.friend;
  bacefook.friends[friend].push(obj);
  bacefook.newsfeed.push(obj);
};

var createPost = function () {
  var newPost = generatePostObj();
  addPost(newPost);
};

for (var i = 0; i < 10; i++) {
  createPost();
}

var scheduler = function () {
  createPost();
  setTimeout(scheduler, Math.random() * 5000);
};

scheduler();