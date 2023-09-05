const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('wew-dongski-gwaps', req.body);
  let preAssessment = 20;
  let profit12Months = req.body.sheet
    .slice(0, 12)
    .reduce((acc, curr) => acc + curr.profitOrLoss, 0);

  let assets12MonthsAverage =
    req.body.sheet.slice(0, 12).reduce((acc, curr) => acc + curr.assetsValue, 0) / 12;

  if (profit12Months > 0) {
    preAssessment = 60;
  }

  if (assets12MonthsAverage > req.body.loanAmount) {
    preAssessment = 100;
  }

  const decisionEngineRequestBody = {
    tokenId: req.body.tokenId,
    businessName: req.body.businessName,
    yearEstablished: req.body.yearEstablished,
    annualSummary: req.body.sheet.reduce((acc, entry) => {
      {
        const key = entry['year'];
        acc[key] ??= 0;
        acc[key] += entry['profitOrLoss'];
        return acc;
      }
    }),
    preAssessment: preAssessment.toString()
  };

  const loanOutcome = {
    tokenId: req.body.tokenId,
    outcome: 'approved',
    approvedAmount: (req.body.loanAmount * preAssessment) / 100,
    approvedTerm: '1 year',
    approvedInterestRate: '10%'
  };

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(loanOutcome));
});

module.exports = router;
