const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => console.log(`App 👂 at http://localhost:${PORT}`));