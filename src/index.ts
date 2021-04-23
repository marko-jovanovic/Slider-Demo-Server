import express from 'express';

const app = express();
const port = 8080;

app.get('/writers-team', (reg, res) => {
  res.send([])
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});