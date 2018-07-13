require("dotenv").config();

var keys = require("./keys")

var Spotify = require('node-spotify-api');

var Twitter = require("twitter");

var spotify = new Spotify(keys.spotify);
var twitter = new Twitter(keys.twitter);

 
// var spotify = new Spotify({
//   id: ,
//   secret: 
// });
 
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