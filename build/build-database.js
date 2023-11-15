const { MongoClient, ObjectId } = require('mongodb');
const config = require('../src/config');

const uri = config.database_host;
const dbName = 'movies';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log('connecting to MongoDB server');
    const db = client.db(dbName);
    const platformCollection = db.collection('platforms');

    const platformData = [
      {
        _id: 'netflixId',
        icon: 'netflix-icon.jpg',
        title: 'Netflix',
      },
      {
        _id: 'HBOId',
        icon: 'HBO-icon.jpg',
        title: 'HBO',
      },
      {
        _id: 'AmazonId',
        icon: 'Amazon-prime-icon.jpg',
        title: 'amazon prime',
      },
    ];

    const resultPlatforms = await platformCollection.insertMany(platformData);

    const users = [
      {
        _id: 'userId1',
        username: 'admin',
        password: '123456',
      },
    ];
    const usersCollection = db.collection('users');
    const resultUsers = await usersCollection.insertMany(users);
    console.log(`${resultPlatforms.insertedCount + resultUsers.insertedCount} documents inserted`);
  } finally {
    await client.close();
    console.log('close connection');
  }
}

run().catch(console.error);
