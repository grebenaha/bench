const async = require('async');
const Chart = require('chart.js');
const fs = require("fs");
const io = require('socket.io')();

exports.help = function (req, res) {
    // const ctx = req.body.chart;
    // console.log(ctx);
        async.series({}, function (err, results) {
            res.render('Help', {title: 'help', error: err, data: results});
        });
    // req.io.on('connection', function(socket){
    //     socket.on('chat message', function(msg){
    //        res.io.emit('chat message', {version: .1});
    //     });
    // });
};

exports.get_chat = function (req, res) {
    async.parallel({

    }, function(err, results) {
        if (err) { return next(err); }
        res.render('help', { title: 'Help'});
    });
};
exports.post_chat = function (req, res) {

    // console.log('dadaad')
// req.io.on('connection', function(socket){
//             socket.on('chat message', function(msg){
//                 io.emit('chat message', msg);
//             });
//         });
    let m = req.body.m
    res.io.emit('chat message', m);
    res.render('help', { title: 'Help'});
    //});
};