const express = require('express');
const router = express.Router();

const loader_controller = require('../controllers/loaderController');

/* GET converter home page. */
router.get('/', loader_controller.index);

/* GET */
router.get('/url/load', loader_controller.benchmark_get);

/* POST data link and load. */
router.post('/url/load', loader_controller.benchmark_post);
module.exports = router;