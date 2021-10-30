import express from 'express';

const app = express();
const port = 3001 || process.env.PORT;

app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
