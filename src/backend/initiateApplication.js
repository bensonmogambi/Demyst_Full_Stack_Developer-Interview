const express = require('express');
const router = express.Router();

router.get('/', async (_, res) => {
  await new Promise((r) => setTimeout(r, 2000));

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ appId: '6443ab5d6f7e89d2d4018eb0' }));
});

module.exports = router;
