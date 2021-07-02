const express = require('express');
const router = express.Router();
const { getCovidData } = require('../controllers/covidDataController');

router.route('/').get(getCovidData);

module.exports = router;
