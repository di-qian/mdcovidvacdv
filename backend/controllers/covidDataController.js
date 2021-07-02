const asyncHandler = require('express-async-handler');
const db = require('../db');

const getCovidData = asyncHandler(async (req, res) => {
  try {
    const results = await db.query(
      'SELECT vaccination_date, county, firstdosedaily, firstdosecumulative, seconddosedaily,seconddosecumulative,singledosedaily,singledosecumulative, atleastonedose,atleastonedosecumulative,fullyvaccinated, fullyvaccinatedcumulative FROM mdvaccinations'
    );

    res.status(200).json({
      status: 'success',
      results: results,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  getCovidData,
};
