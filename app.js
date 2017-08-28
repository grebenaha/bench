const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');
const loader = require('./routes/loader');
const help = require('./routes/help');
const contact = require('./routes/contact');

const app = express();
//app.io = require('socket.io')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//app.io = io;
// app.use(function(req, res, next){
//     req.io = io;
//     next();
// });
app.use(function(req, res, next){
    req.io = io;
    next();
});
app.use(function(req, res, next){
    res.io = io;
    next();
});
// io.on('connection', function(socket){
//     socket.on('chat message', function(msg){
//         io.emit('chat message', msg);
//     });
// });
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/loader', loader);
app.use('/help', help);
app.use('/contact', contact);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
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
// app.io = function(server) {
//     var io = require('socket.io')(server);
//     io.on('connection', function (socket) {
//         socket.on('chat message', function (msg) {
//             io.emit('chat message', msg);
//         });
//     });
// }
module.exports = {app: app, server: server};
