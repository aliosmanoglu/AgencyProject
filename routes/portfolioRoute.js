const express = require('express');

const portfolioController = require('../controllers/portfolioController');

const router = express.Router();


router.route('/').post(portfolioController.addPortfolio);
router.route('/:id').post(portfolioController.updatePortfolio);

module.exports = router;