const async = require('async');
//const convert = require('../my_modules/convertModul');
const randomstring = require("randomstring");
const https = require('https');
const io = require('socket.io')();

exports.index = function (req, res) {

    async.parallel({
    }, function (err, results) {
        res.render('index', {title: 'Loader', error: err, data: results });
    });
};
exports.benchmark_get = function(req, res, next) {
    async.parallel({

    }, function(err, results) {
        if (err) { return next(err); }
        res.render('load_form', { title: 'Make Load'});
    });

};
//Benchmark URL
exports.benchmark_post = function (req, res, next) {
    // res.io.emit("socketToMe", {version: .1});
    // console.log('LOADER')
    //  // io.on('chat message', function (socket) {
    //  //     console.log('New Connection', socket.id)
    //  // res.io.emit("chat message", {version: .1});
    //  // });
    // io.on('connection', function(socket){
    //     socket.on('chat message', function(msg){
    //         res.io.emit('chat message', msg);
    //     });
    // });

    const concurrency = req.body.concurrency;
    const port = req.body.port;
    const url = req.body.url;
    const path = req.body.path;
    const options = {
        hostname: url,
        port: port,
        path: path,
        method: 'POST'
    };

    const createHttp = function (id, callback) {
        let start = new Date();
        const req = https.request(options, (res) => {
            let latency = new Date() - start;
            callback(null, latency);
        });
        req.on('error', (err) => {
            res.render('load_form', {title: 'Error', error: err});

        });
        req.end();

    };

    async.times(concurrency, function (n, next) {
        createHttp(n, function (err, user) {
            next(err, user);
        });
    }, function (err, results) {
        if (err) {
            return next(err)
        }

        res.io.emit("chat message", {data: results});
        //res.io.emit("chat message", 'dada');
        res.render('load_form', {title: 'Loader', data: results});
        console.log(results)
    });

};