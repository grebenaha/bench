const express = require('express');
const router = express.Router();

const loader_controller = require('../controllers/loaderController');

/* GET converter home page. */
router.get('/', loader_controller.index);

/* POST data link and load. */

router.post('/', loader_controller.benchmark);
module.exports = router;