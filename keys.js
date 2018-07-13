// var Twitter = require('twitter');
 

 
// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });

// var Twitter = require('twitter');

// var client = new Twitter({
//     consumer_key: "process.env.cWa7MFVQQP42TCGnJYIykcfjC",
//     consumer_secret: "process.env.QJC0rk9iun6MtrAqhXW9N34lcd9sGRzRMx2thmOivW4WWLTFHZ",
//     access_token_key: "process.env.1016791490155110400-n14ad5niYVgCdttKl25CrHntS5YxQM",
//     access_token_secret: "process.env.4sVEFdBPHI61kU0UosWtOhyTobJZMflcNFJCYGISeEdA6"
//   });

//   client.get('favorites/list', function(error, tweets, response) {
//     if(error) throw error;
//     console.log(tweets);  // The favorites.
//     console.log(response);  // Raw response object.
//   });


  console.log('this is loaded');

exports.twitter = {
  
  
  
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,

  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

  



