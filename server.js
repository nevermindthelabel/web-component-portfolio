const express = require('express');
const PORT = process.env.PORT || 3000;
const routes = require('./routes');

const app = express();

app.get('/', async (req, res) => {
  await res.send('express works');
});

app.get('/test', async (req, res) => {
  await res.send('testing route works');
});

app.use(routes);

app.listen(PORT, () => console.log(`App 👂 at http://localhost:${PORT}`));
