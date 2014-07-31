var fs = require('fs-extra'),
    path = require('path'),
    Logger = require('../logger')(),
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
		fs.copySync(path.join(__dirname, '/../templates/appTemplate'), appPath);
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

	  Logger.info();
	  Logger.info('Please, run "cd ' + appName + ' && npm install"');

	});
};