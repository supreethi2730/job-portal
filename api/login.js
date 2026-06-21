import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

const uri = process.env.MONGO_URI;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send();

  const client = await MongoClient.connect(uri);
  const db = client.db("jobportal");

  const user = await db.collection("users").findOne({ email: req.body.email });

  if (!user) return res.status(400).json({ message: "User not found" });

  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match) return res.status(400).json({ message: "Wrong password" });

  res.json({ message: "Login success", user: user.email });
}