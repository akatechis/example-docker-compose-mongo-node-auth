require('dotenv').config()
const { MongoClient } = require('mongodb')

async function main () {
  console.log('Connecting')
  const client = new MongoClient(process.env.MDB_CONNECTION, {
    connectTimeoutMS: 10000,
    useUnifiedTopology: true,
  })
  await client.connect()
  const db = client.db()
  const events = db.collection('events')

  console.log('Inserting an event')
  await events.insertOne({
    type: 'foo',
    timestamp: new Date(),
  })

  console.log('Done.')
  process.exit(0)
}

if (require.main === module) {
  main()
}
