var TinderPro      = require('tinder_pro')
  , requestify     = require('requestify')
  , FACEBOOK_ID    = process.env.FACEBOOK_ID
  , FACEBOOK_TOKEN = process.env.FACEBOOK_TOKEN
  , util           = require('util')
  ,  _             = require('underscore');

var tinder = new TinderPro();

tinder.sign_in(FACEBOOK_ID, FACEBOOK_TOKEN, function(err, res, body){
  if (err) {
    console.log(err);
    process.exit(1);
  }

  tinder.get_nearby_users(function(err, req, body) {
    _.each(body.results, function(entry, idx) {
      var _id = entry._id;

      _.each(entry.photos, function(photo, idx) {
        var photoUrl = photo.url;

        requestify.post(
        // Going through Blockspring for now
        util.format(
          'https://sender.blockspring.com/api_v1/blocks/1751dda528c435200664e90be095bd04?api_key=%s',
          process.env.BLOCKSPRING_KEY,
        ), {
          'image_url': photoUrl
        })
        .then(function(response) {
          var responseBody = response.getBody().results;

          if (responseBody) {
            console.log(util.format('User: %s\'s photo, url = %s', _id, photoUrl));
            console.log(responseBody);
          }
        });
      });
    });
  });
});
