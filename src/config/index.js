require('dotenv').config();

module.exports = {
  port: process.env.SERVER_PORT,
  database_host: process.env.MONGO_HOST,
};
