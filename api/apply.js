import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

export default async function handler(req, res) {
  const client = await MongoClient.connect(uri);
  const db = client.db("jobportal");

  await db.collection("applications").insertOne(req.body);

  res.json({ message: "Applied successfully" });
}