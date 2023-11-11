import http from 'http';

import app from '@root/app';
import config from '@root/config';

const { port } = config;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
