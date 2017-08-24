const https = require('https');
const options = {
    hostname: 'new-community-qa.colu.com',
    port: 443,
    path: '/api/currencies/584e9e56dc945cf245407347/community?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0aWQiOiI1OTc4ODEyM2VhMjk3NzAyYWJmMTEwMTUiLCJleHAiOjE1MDg4NDU2MDM1Mjh9.Am0g7VosDqXIZNhNjxCyEh1jwv5wd1kThYaMY9t5LwI',
    method: 'GET'
};

// var x = 0;
// var intervalID = setInterval(function () {
//
//     // Your logic here
//     console.log('test')
//
//     if (++x === 5) {
//         clearInterval(intervalID);
//     }
// }, 1000);
function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = setInterval(function () {

        callback();

        if (++x === repetitions) {
            clearInterval(intervalID);
        }
    }, delay);
}

// This will be repeated every for 5 times with 1 second intervals:
setIntervalX(function () {
    let start = new Date();
    // Your logic here
    const req = https.request(options, (res) => {
        let latency = new Date() - start;
        console.log(latency)

    });
    req.on('error', (err) => {
        res.render('index', {title: 'Error', error: err});

    });
    req.end();
}, 1000, 5);
$(document).ready(function () {
    var url, path, concurrency, port
    $('#mybtn').click(function () {
        url = $('#url').val();
        path = $('#path').val();
        concurrency = $('#concurrency').val();
        port = $('#port').val();
        $.post('', {url: url, path: path, concurrency: concurrency, port: port}, function (data) {
            $('#output').html(data[#{test}])
            console.log(data)
        })
    })
    //console.log(#{test})
    //console.log(typeof data)
    const ctx = document.getElementById("chart");
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Requests',
                data: [#{test}],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});
