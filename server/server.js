const express = require("express");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

const app = express();
app.use(express.json());

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`💻 🏃‍♂️ at http://localhost:${PORT}`));
