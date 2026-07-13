import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://priyankayadav131017:131017@cluster0.qnexurj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

try {
  await client.connect();
  console.log("Connected successfully!");
  await client.close();
} catch (err) {
  console.error(err);
}