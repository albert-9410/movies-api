import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

import api from '@root/api';

const app = express();

app.use(
  multer({
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
  }).single('image')
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/', api);
app.use('*', (req, res) => {
  res.sendStatus(404);
});

export default app;
