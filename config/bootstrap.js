/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
cb();
/*	Emoji.create([{
		text:';)'
	},
	{
		text:':('
	},
	{
		text:':P'
	}]).exec({
		error:function theBadFuture(err) {
			console.log('Ha ocurrido un error',err);
			cb(err);
		},
		success: function theGoodFuture(result) {
			console.log('Funciona');
			cb();
		}
	});	
*/
};
