//const myRequest = require('/my_modules/requestModule');
//import * as myRequest from "/my_modules/requestModule"

// NProgress.configure({ parent: '#container' });
// NProgress.configure({ showSpinner: false });
// // Trigger finish when page fully loaded
// jQuery('#loader-btn').on('click', function () {
//
//     NProgress.start();
// });
// jQuery(window).on('onload', function () {
//
//     NProgress.done();
// });
// // Trigger bar when exiting the page
// jQuery(window).on('unload', function () {
//     NProgress.start();
// });

function reload() {
    let content = document.getElementById("output");
    location.replace("http://localhost:3000");
}

// $('#myForm').submit(function (e) {
//     e.preventDefault();
//     let msg   = $('#loader-btn').serialize();
//     $.ajax({
//         method: "POST",
//         url: "",
//         data: msg,
//         success: function (newData) {
//             let myArr = [];
//             const latency = $('pre.test').text();
//             console.log('LATENCY ' + latency);
//             myArr.push(latency);
//             console.log('MYARR ' + myArr);
//             alert('Local Data ' + test);
//             const ctx = document.getElementById("chart").getContext('2d');
//             const myChart = new Chart(ctx, {
//                 type: 'line',
//                 data: {
//                     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//                     datasets: [{
//                         label: '# of Requests',
//                         data: [test],
//                         backgroundColor: [
//                             'rgba(255, 99, 132, 0.2)',
//                             'rgba(54, 162, 235, 0.2)',
//                             'rgba(255, 206, 86, 0.2)',
//                             'rgba(75, 192, 192, 0.2)',
//                             'rgba(153, 102, 255, 0.2)',
//                             'rgba(255, 159, 64, 0.2)'
//                         ],
//                         borderColor: [
//                             'rgba(255,99,132,1)',
//                             'rgba(54, 162, 235, 1)',
//                             'rgba(255, 206, 86, 1)',
//                             'rgba(75, 192, 192, 1)',
//                             'rgba(153, 102, 255, 1)',
//                             'rgba(255, 159, 64, 1)'
//                         ],
//                         borderWidth: 1
//                     }]
//                 },
//                 options: {
//                     scales: {
//                         yAxes: [{
//                             ticks: {
//                                 beginAtZero: true
//                             }
//                         }]
//                     }
//                 }
//             });
//             console.log(newData)
//         }
//     })
// });

// let myArr = [];
// const latency = $('pre.test').text();
// myArr.push(latency);
// console.log(typeof myArr);
// console.log('!{data}')
// const ctx = document.getElementById("chart");
// const myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Requests',
//             data: myArr,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });