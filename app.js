var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require("./utils/middleware/passport-local");
const session = require("express-session");

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// requiring models
var db = require('./models')


// view engine setup - commented out for now
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static('public'));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// turn on session and passport stuff for authentication
app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

  // Placed this in bin/www so it would occur before listening on port
  // db.sequelize.sync({force: false});
      
  
});

db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, () => console.log("server up and running"));
});