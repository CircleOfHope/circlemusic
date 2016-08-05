require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var sassMiddleware = require('node-sass-middleware');
var autoprefixer = require('express-autoprefixer');
var mongoose = require('mongoose');

var songRouter = require('./routes/songs');

var app = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', function() {
  console.log('connected to mongo!');
});
mongoose.connection.on('error', function(err) {
  console.log('error encountered: ' + err);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
var env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// when a request comes in for anything at /css, we look for
// a equivalent SASS file with the same name, and compile it
// if a) it's the first time requested since server boot or
// b) it has been modified since last time .css file was made
app.use('/css', sassMiddleware({
  src: path.join(__dirname, 'public','css'),
  response: false,
  includePaths: [
    path.join(__dirname, 'node_modules')
  ]
}));
// similar to above, this will run autoprefixer on any css files
// when requested except it will do it every time.
app.use('/css', autoprefixer({browsers: 'last 2 versions'}));
// when a request comes in for anything at /js, first check for
// the static file in the bootstrap js distro
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap-sass/assets/javascripts')));
// any other request for a static file should look in the public folder
app.use(express.static(path.join(__dirname, 'public')));

// not requesting a static file at this point, use the router
app.use('/songs', songRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.html', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error.html', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
