//创建http错误的中间件
var createError = require('http-errors');

var express = require('express');

var path = require('path');
var cors = require('cors')
//记录开发模式日志的中间件
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
//使用JSON负载解析传入的请求的中间件
app.use(express.json());
//使用URL编码的有效内容解析传入的请求
app.use(express.urlencoded({ extended: false }));

//提供静态资源，例如HTML文件，图像等。
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/api', indexRouter);
app.use('/users', usersRouter);

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
});

module.exports = app;
