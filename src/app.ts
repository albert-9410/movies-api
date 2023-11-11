import express from 'express';
import bodyParser from 'body-parser';

import api from '@root/api';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/', api);
app.use('*', (req, res) => {
  res.sendStatus(404);
});

export default app;
