const router = require('express').Router();

router.route('/api', async (req, res) => {
  res.send('api route')
});

module.exports = router;
