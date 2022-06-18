const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "School_Management";

async function main() {
  await client.connect();
  console.log("done");
  const db = client.db(dbName);
  const collection = db.collection("Class");

  return "done.";
}

main()
  .then(console.log)
  .catch(console.err)
  .finally(() => client.close());
