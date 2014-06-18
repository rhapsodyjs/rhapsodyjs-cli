var fs = require('fs-extra'),
    path = require('path'),
    Wolverine = require('wolverine'),
    Logger = new Wolverine({time: false, printLevel: false}),
    npm = require('npm'),
    _ = require('lodash');

module.exports = function scaffoldApp(appName, rhapsodyVersion) {
	var appPath = path.join(process.cwd(), appName);

	Logger.info('Scaffolding app');
	try {
	  fs.mkdirSync(appPath);
	}
	catch(e) {
	  Logger.error(e);
	}

	//Copy the scaffold of a project to the app folder
	try {
		fs.copySync(path.join(__dirname, '/../appTemplate'), appPath);
	}
	catch(err) {
		Logger.error(err);
		throw err;
	}

	//Generate package.json
	var packageFile = {
	  'name': appName,
	  'main': 'app.js',
	  'dependencies': {
		'rhapsody': ('^' + rhapsodyVersion),
		'ejs': '^0.8.5'
	  }
	};

	fs.writeJSON(path.join(appPath, '/package.json'), packageFile, function(err) {
	  if(err) {
		fs.remove(appPath, function(err) {});
		return Logger.error(err);
	  }

	  Logger.info('Running "npm install"');

	  //Run 'npm install' inside the new app folder
	  npm.load({prefix: appPath, loglevel: 'error'}, function (err) {
		npm.commands.install([], function (er, data) {
		});

		npm.on('log', function (message) {
		});
	  });

	});
};