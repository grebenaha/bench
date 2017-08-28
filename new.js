const async = require('async');
//const convert = require('../my_modules/convertModul');
const randomstring = require("randomstring");
const exec = require('child_process').exec;
const loadBar = require('./my_modules/progressModul');

exports.index = function (req, res) {

    async.parallel({

    }, function (err, results) {
        res.render('index', {title: 'Loader', error: err, data: results });
    });
};

//Benchmark URL
exports.benchmark = function (req, res, next) {
    const concurrency  = req.body.concurrency;
    const requests = req.body.requests;
    const url = req.body.url;
    const api = req.body.api;
    //const cmd = 'ab  -c 500 -n 100000 https://new-community-qa.colu.com/api/currencies/584e9e56dc945cf245407347/community?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0aWQiOiI1OTc4ODEyM2VhMjk3NzAyYWJmMTEwMTUiLCJleHAiOjE1MDg4NDU2MDM1Mjh9.Am0g7VosDqXIZNhNjxCyEh1jwv5wd1kThYaMY9t5LwI';
    const cmd = 'abs -r -c ' + concurrency + ' -n ' + requests + ' ' + url + api + '?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0aWQiOiI1OTc4ODEyM2VhMjk3NzAyYWJmMTEwMTUiLCJleHAiOjE1MDg4NDU2MDM1Mjh9.Am0g7VosDqXIZNhNjxCyEh1jwv5wd1kThYaMY9t5LwI';
    console.log(cmd);
    async.series({
        output: function(callback) {
            exec(cmd, (err, stdout, stderr) => {
                if (err) {
                    res.render('index', {title: 'Error', error: err});
                    return;
                }
                callback(null, stdout);
            });
        },
    }, function(err, results) {
        if (err) {return next(err)}
        test.pipe(res.end('index', {title: 'Loader', error: err, data: results }));
    });

};
$(function () {
    var socket = io();
    $('form').submit(function () {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('chat message', function (msg) {
        $('#messages').append($('#test').text(msg));
        window.scrollTo(0, document.body.scrollHeight);
    });
});
$(function () {
    var socket = io();
    $('#mybtn').click(function () {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('chat message', function (msg) {
        $('#messages').append($('#test').text(msg));
        window.scrollTo(0, document.body.scrollHeight);
    });
});
$(function () {
    var socket = io();
    $('#loader-btn').click(function (e) {
        e.preventDefault();
        var data = {};
        data.url = $('#url').val();
        data.path = $('#path').val();
        data.concurrency = $('#concurrency').val();
        data.port = $('#port').val();

        $.ajax({
            type: 'POST',
            data: data,
            url: '',
            success: function (data) {
                console.log(JSON.stringify(data));
            }
        })
    });
});