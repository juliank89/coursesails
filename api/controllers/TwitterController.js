/**
 * TwitterController
 *
 * @description :: Server-side logic for managing Twitters
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	handleLogin: function (req,res) {
		req.session.me = "asdasdasd";
		return res.ok();
	}
};

