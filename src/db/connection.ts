import fs from 'fs';
import mongoose from 'mongoose';
import config from '@root/config';

const databaseHost = config.database_host;

const mongooseInstance = new mongoose.Mongoose();
mongooseInstance.connect(databaseHost!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongooseInstance.connection.on('open', () => {
  console.log(`Successfully Connected to MongoDB on Host ${databaseHost}`);
});

mongooseInstance.connection.on('error', (error) => {
  console.log(`Error Connecting to MongoDB ${error?.message}`);
});

const modelsPath = `${__dirname}/models`;
fs.readdirSync(modelsPath)
  .filter((file) => fs.lstatSync(`${modelsPath}/${file}`).isDirectory())
  .forEach((collection) => {
    fs.readdirSync(`${modelsPath}/${collection}`)
      .filter((file) => file.endsWith('.schema.js'))
      .forEach((file) => {
          require(`${modelsPath}/${collection}/${file}`)(mongooseInstance);
      });
  });

export default mongooseInstance;
