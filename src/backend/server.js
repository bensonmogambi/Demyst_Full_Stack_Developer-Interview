const express = require('express');
const router = express.Router();

router.use('/initiateApplication', require('./initiateApplication'));
router.use('/balance-sheet', require('./accountingSoftware'));
router.use('/decision-engine', require('./decisionEngine'));

module.exports = router;
