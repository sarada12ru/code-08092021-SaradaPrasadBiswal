const express = require( 'express' );
const router = express.Router();
const controller = require( './controller' );

router.post( '/bmi-calculator', controller.bmiCalculator );

module.exports = router;