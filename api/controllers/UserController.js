/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	whoami: function (req,res) {
		return res.json({
			me: req.session.me
		});
	},

	findOne: function(req,res){
		var Twitter = require('machinepack-twitter');

		// Get the URL on twitter.com that a user should visit to allow/deny the specified Twitter Developer app (i.e. your app).
		Twitter.getLoginUrl({
			consumerKey: sails.config.twitter.consumerKey,
			consumerSecret: sails.config.twitter.consumerSecret,
			callbackUrl: sails.config.twitter.callbackUrl
		}).exec({
			// An unexpected error occurred.
			error: function (err){
			 	return res.negotiate(err);
			},
			// OK.
			success: function (twitterLoginUrl){

		 		User.findOne({
					screenName: req.param('screenName')
				}).exec(function (err,user) {
					if(err) return res.negotiate(err);

					if(!user){
						return res.notFound();
					}

					Emoji.find({
						owner: user.id
					}).exec(function (err,emojis) {
						if(err) return res.negotiate(err);

						return res.view('profile', {
							user: user,
							emojis: emojis,
							twitterLoginUrl: twitterLoginUrl
						});
					});
				});
			},
		});

		
	}
};

