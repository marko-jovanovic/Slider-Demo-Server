import express from 'express';
import WriterService from './service/Writer';

const port = 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/writers-team', async (req, res) => {
  const service = WriterService.getInstance();
  res.json(await service.findAll());
});

app.post('/writers-team', async (req, res) => {
  const service = WriterService.getInstance();
  res.json(await service.create(req.body));
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});