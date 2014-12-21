var http = require('http'),
    path = require('path');

module.exports = {
  error404Handler: function(req, res) {
    Rhapsody.log.error('Error 404', req.originalUrl);

    var code = 404;
    if(req.xhr) {
      res.send(code, http.STATUS_CODES[code]);
    }
    else {
      res.status(code);
      res.render(path.join(__dirname, '/' + code), {
        page: req.originalUrl
      });      
    }
  },

  error500Handler: function(err, req, res, next) {
    Rhapsody.log.error(err);
    
    var code = 500;
    if(req.xhr) {
      res.send(code, http.STATUS_CODES[code]);
    }
    else {
      res.status(code);
      res.render(path.join(__dirname, '/' + code), {
        error: err.toString(),
        stack: err.stack.split('\n').slice(1)
      });      
    }

    //Give time to send the 500 error page
    //and then kill the process
    setTimeout(function() {
      process.exit(1);
      
    }, 100);
  }
};