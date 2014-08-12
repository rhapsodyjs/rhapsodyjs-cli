module.exports = {
  host: 'localhost',

  http: {
    port: 4242,
    socket: true
  },

  https: {
    enabled: false,
    port: 4243,
    socket: true
  },

  methodOverride: {
    enabled: false,
    attributeName: 'newMethod'
  },

  database: {
    enabled: true,
    defaultAdapter: 'memory'
  },
  
  log: {
      //Name of the debug level
      //For more info about the settings, see WolverineJS documentation: https://github.com/talyssonoc/wolverinejs
      level: 'all',

      //if undefined, will print to the terminal
      output: undefined,

      //If true, will print the error stack if an Error object is passed as argument in some log method
      printStack: false,

      //If true, show the debug level before the message
      printLevel: true,

      //If true, shows the time the log was logged before the level name
      printTime: true,

      //If true, show and file and the line number of where the log was called
      printFileInfo: true,

      //If the logger is using some driver, you should pass here the two
      //attributes, like this:
      //driver: {
      //  lib: require(driverName),
      //  config: driverCOnfig
      //}
      driver: undefined
  },

  routes: {
    //Controller used when access the app's root
    mainController: 'main',

    //View used when the user doesn't specify it
    mainView: 'index',

    //If must be created REST routes for models
    allowREST: true
  },

  globals: {
    models: false
  },

  //If true, uploaded files via form will be at req.file
  upload: {
      enabled: false,
  },

  compression: {
    enabled: true
  },

  clientModels: {
    enabled: true,
    adapter: undefined,
    destination: 'app/public/models'
  },

  csrf: {
    enabled: false
  },

  cluster: {
    enabled: true
  }
};