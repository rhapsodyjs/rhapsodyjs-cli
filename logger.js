var Wolverine = require('wolverine');

module.exports = function(options) {
	options = options || { printLevel: false, time: false };

	var Logger = new Wolverine(options);

	Logger.addLevel('required', {
	  color: 'red'
	});

	Logger.addLevel('usage', {
	  bold: 'true'
	});

	Logger.addLevel('optionsTitle', {
	  color: 'brightWhite'
	});

	Logger.addLevel('showOptions', {
	  color: 'grey'
	});

	return Logger;
};