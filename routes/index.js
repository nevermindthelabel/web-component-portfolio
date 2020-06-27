const router = require('express').Router();

router.get('/api', async (req, res) => {
  await res.send('api route')
});

router.get('/', async (req, res) => {
  await res.send('express works');
});

router.get('/test', async (req, res) => {
  await res.send('testing route works');
});


module.exports = router;
