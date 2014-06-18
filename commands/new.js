module.exports = function(msg) {
	return function(opts) {
	  if(opts._.length === 1) {
	    msg.argument('name');
	    return msg.usage('new <name>');
	  }

	  var appScaffolder = require('../scaffolders/appScaffolder');
	  var appName = opts._[1];

	  appScaffolder(appName, '0.2.0');

	};
};