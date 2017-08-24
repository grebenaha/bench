const express = require('express');
const router = express.Router();
const help_controller = require('../controllers/helpController');
/* GET help page. */
router.get('/', help_controller.help);
module.exports = router;