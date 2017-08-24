const async = require('async');
const Chart = require('chart.js');
const fs = require("fs");

exports.help = function (req, res) {
    const ctx = req.body.chart;
    console.log(ctx);
        async.series({}, function (err, results) {
            res.render('Help', {title: 'help', error: err, data: results});
        });

};