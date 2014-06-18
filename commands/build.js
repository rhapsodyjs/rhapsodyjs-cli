module.exports = function(msg, server) {
	return function(opts) {
	  var extras = opts._;
	  if(extras.length > 1) {
	    return msg.usage('build');
	  }
	  server.build();
	  return;
	}
};