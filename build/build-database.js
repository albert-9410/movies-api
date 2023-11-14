const { MongoClient, ObjectId } = require('mongodb');
const config = require('../src/config');

const uri = config.database_host
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
				_id: new ObjectId('5fb3a45c3df54939b6a7b1f2'),
        icon: 'netflix-icon.jpg',
        title: 'Netflix',
      },
			{
				_id: new ObjectId('6fb3a45c3df54939b6a7b1f3'),
        icon: 'HBO-icon.jpg',
        title: 'HBO',
      },
			{
				_id: new ObjectId('7fb3a45c3df54939b6a7b1f4'),
        icon: 'Amazon-prime-icon.jpg',
        title: 'amazon prime',
      },
    ];

    const result = await platformCollection.insertMany(platformData);
    console.log(`${result.insertedCount} documents inserted`);

  } finally {
    await client.close();
    console.log('close connection');
  }
}

run().catch(console.error);
