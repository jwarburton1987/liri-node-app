require("dotenv").config();

var keys = require("./keys")

var Spotify = require('node-spotify-api');

var Twitter = require("twitter");

var spotify = new Spotify(keys.spotify);
var twitter = new Twitter(keys.twitter);

 
var spotify = new Spotify({
  id: cc34a045e5ac407baad7b7c40caa7e8a,
  secret: db369230fff64d9f98db1f5e16b93c01
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});