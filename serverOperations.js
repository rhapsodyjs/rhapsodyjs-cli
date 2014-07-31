var path = require('path'),
    Logger = require('./logger')();

var ServerOperations = function(appPath) {
	this.appPath = appPath;
};

ServerOperations.prototype = {
  build: function build() {
  	var self = this;

    var Rhapsody = this.getRhapsody();
    rhapsodyServer = new Rhapsody({
      root: self.appPath,
      build: true
    });

    return rhapsodyServer;
  },

  run: function run(rhapsodyServer) {
  	var self = this;

    rhapsodyServer = rhapsodyServer || new this.getRhapsody()({
      root: self.appPath,
      build: false
    });

    rhapsodyServer.open();
  },

  getRhapsody: function getRhapsody() {
    try {
      var Rhapsody = require(path.join(this.appPath, '/node_modules/rhapsody'));
    }
    catch(e1) {
      try {
        var Rhapsody = require('rhapsody');
      }
      catch(e2) {
      	Logger.fatal();
        Logger.fatal('You don\'t have RhapsodyJS installed');
        process.exit(1);
      }
    }

    return Rhapsody;
  }
};

module.exports = ServerOperations;
