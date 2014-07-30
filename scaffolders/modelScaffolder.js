var fs = require('fs-extra'),
    path = require('path'),
    Wolverine = require('wolverine'),
    Logger = new Wolverine({time: false, printLevel: false}),
    _ = require('lodash');

module.exports = function scaffoldModel(modelName, attributes) {
	var appPath = process.cwd();

	var model = require('../templates/modelTemplate');

	var attribute,
		attr,
		i;

	//Fills the model attributes with its types
	for(i = 0; i < attributes.length; i++) {
	  attr = attributes[i];
	  attribute = attr.split(':');
	  if(attribute.length === 2) {
		model.attributes[attribute[0]] = {
		  type: attribute[1]
		};
	  }
	  else {
		//If user does not pass the attribute type,
		//use "String" as default
		model.attributes[attribute[0]] = {
		  type: 'String'
		};
	  }
	}

	var modelTemplate = _.template('var <%= name %> = <%= modelData %>;\n\nmodule.exports = <%= name %>;');

	var modelString = modelTemplate({
	  name: modelName,
	  modelData: JSON.stringify(model, null, '\t')
	});

	try {
	  fs.writeFile(path.join(appPath, '/app/models/' + modelName + '.js'), modelString, function(err) {
		if(err) {
		  return Logger.error(err);
		}
	  });
	}
	catch(e) {
	  Logger.error(e);
	  throw e;
	}
};