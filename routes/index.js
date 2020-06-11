const router = require('express').Router();

router.get('/api', async (req, res) => {
  res.send('api route')
});

module.exports = router;
