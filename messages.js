var Messages = function(Logger) {
	this.Logger = Logger;
};

Messages.prototype = {
    /**
    * Says that an argument is required
    * @param  {String} arg
    */
    argument: function argument(arg) {
        this.Logger.info();
        return this.Logger.required('' + arg + ' argument is required');
    },

    /**
    * Show the usage of a command
    * @param  {String} example
    */
    usage: function usage(example) {
        this.Logger.info();
        return this.Logger.usage('Usage: rhapsody ' + example);
    },

    /**
    * Show the possible options of a command
    * @param  {String} command
    * @param  {Array} options Array of arrays, where each sub-array has his usage in the first position, and explanation in the second
    */
    showOptions: function showOptions(command, options) {
        var opt,
        option;
    
        this.Logger.info();
        this.Logger.optionsTitle(command);
        for(opt in options) {
            option = options[opt];
            this.Logger.showOptions('   ' + option[0] + '\t' + option[1]);
        }
        return;
    },

    /**
    * Says that a command is invalid
    * @param  {String} command
    */
    invalid: function invalid(command) {
        return this.Logger.warn(command + ' command is invalid');
    }
};

module.exports = Messages;