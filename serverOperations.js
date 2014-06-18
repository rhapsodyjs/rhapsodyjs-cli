var path = require('path');

var ServerOperations = function(appPath) {
	this.appPath = appPath;
};

ServerOperations.prototype = {
  build: function build() {
  	var self = this;

    //Imports the local RhapsodyJS of the app
    var Rhapsody = require(path.join(self.appPath, '/node_modules/rhapsody')),
    rhapsodyServer = new Rhapsody({
          root: self.appPath,
          build: true
        });

    return rhapsodyServer;
  },

  run: function run(rhapsodyServer) {
  	var self = this;

    //Imports the local RhapsodyJS of the app
    var Rhapsody = require(path.join(self.appPath, '/node_modules/rhapsody'));
    rhapsodyServer = rhapsodyServer || new Rhapsody({
      root: self.appPath,
      build: false
    });

    rhapsodyServer.open();
  }
};

module.exports = ServerOperations;