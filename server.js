const express = require('express');
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(PORT, () => console.log(`App 👂 at http://localhost:${PORT}`));
