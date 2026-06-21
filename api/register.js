import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

const uri = process.env.MONGO_URI;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send();

  const client = await MongoClient.connect(uri);
  const db = client.db("jobportal");

  const hashed = await bcrypt.hash(req.body.password, 10);

  await db.collection("users").insertOne({
    name: req.body.name,
    email: req.body.email,
    password: hashed
  });

  res.json({ message: "User registered" });
}