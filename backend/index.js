// var debug = require('debug')('frontend-code-challenge');
var express = require('express');
const cors = require("cors");
// var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('./lib/logger');
var users = require('./routes/users');

var app = express();

var log = logger(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// set up route name 
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
app.use(function(err, req, res, next) {
  log.error(err);
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

// set up port for front end access  
app.set('port', process.env.PORT || 5000);

// start server 
var server = app.listen(app.get('port'), function() {
  log.info('Express server listening on http://localhost:%d', server.address().port);
});
