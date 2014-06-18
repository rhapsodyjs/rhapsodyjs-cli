module.exports = function(msg) {

	return function(opts) {
	  var extras = opts._;

	  if(extras.length === 1) {
	    msg.argument('generator');
	    msg.usage('generate <generator>');
	    msg.showOptions('generator', [['controller', 'Create a new controller'], ['model', 'Create a new model']]);
	    return;
	  }

	  if(extras[1] === 'model') {
	    //If wasn't passed the attributes and/or the name
	    if(extras.length <= 3) {
	      msg.argument('attribute');
	      msg.usage('model <name> <attributeName[:type]> [|attributeName[:type]]');
	      msg.showOptions('type', [['String', ''], ['Number', ''], ['Date', ''], ['Buffer', ''], ['Boolean', ''], ['Object', ''], ['Array', '']]);
	      return;
	    }
	    else {
	      var modelScaffolder = require('./scaffolders/modelScaffolder');

	      modelScaffolder(extras[2], extras.slice(3, extras.length));
	    }
	  }

	  if(extras[1] === 'controller') {
	  	msg.invalid('controller');
	    // //If wasn't passed the views and/or the name
	    // if(extras.length <= 3) {
	    //   msg.argument('view');
	    //   msg.usage('controller <name> <view> [|view]');
	    //   msg.showOptions('name', [['name\t\t', 'Just the name'], ['supcontrollers>name', 'All the supercontrollers of the controller']]);
	    //   msg.showOptions('view', [['viewName\t', 'Just the name'], ['verb:viewName', 'The HTTP verb, followed by the name']]);
	    //   return;
	    // }
	    // else {
	    //   scaffolder.scaffoldController(extras[2], extras.slice(3, extras.length));
	    // }
	  }

	};

};