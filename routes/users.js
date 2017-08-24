const express = require('express');
const router = express.Router();
const io = require('socket.io')();
/* GET users listing. */
router.get('/', function( req, res, next) {
    res.io.emit("socketToMe", "users");
    res.send('respond with a resource.');
});

module.exports = router;
