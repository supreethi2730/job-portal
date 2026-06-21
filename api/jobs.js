import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

export default async function handler(req, res) {
  const client = await MongoClient.connect(uri);
  const db = client.db("jobportal");

  if (req.method === "GET") {
    const jobs = await db.collection("jobs").find().toArray();
    return res.json(jobs);
  }

  if (req.method === "POST") {
    await db.collection("jobs").insertOne(req.body);
    return res.json({ message: "Job added" });
  }
}