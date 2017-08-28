const express = require('express');
const router = express.Router();
const help_controller = require('../controllers/helpController');

/* GET help page. */
router.get('/', help_controller.help);

router.get('/my/load', help_controller.get_chat);

router.post('/my/load', help_controller.post_chat);
module.exports = router;