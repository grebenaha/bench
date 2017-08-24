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