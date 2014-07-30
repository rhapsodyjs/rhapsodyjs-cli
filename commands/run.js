module.exports = function(msg, server) {
	return function(opts) {

	  var extras = opts._;
	  if(extras.length > 2) {
	    msg.usage('run [options]');
	    msg.showOptions('no-build', [['-n --no-build', 'Don\'t build again, just run']]);
	    return;
	  }

	  //If the no-build flas was passed, just run the server without build it
	  if(opts['no-build']) {
	    server.run();
	  }
	  else {
	    //Build the server, than pass it to be run
	    server.run(server.build());
	  }

	}
};
