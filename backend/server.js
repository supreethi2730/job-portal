const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Job Portal Backend Running");
});

let jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    type: "Full Time",
    experience: "2-4 Years",
    salary: "₹12 - ₹25 LPA"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Amazon",
    location: "Hyderabad",
    type: "Remote",
    experience: "3-5 Years",
    salary: "₹15 - ₹30 LPA"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Infosys",
    location: "Pune",
    type: "Full Time",
    experience: "1-3 Years",
    salary: "₹6 - ₹12 LPA"
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Microsoft",
    location: "Bangalore",
    type: "Hybrid",
    experience: "2-4 Years",
    salary: "₹10 - ₹18 LPA"
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "Adobe",
    location: "Mumbai",
    type: "Full Time",
    experience: "2-5 Years",
    salary: "₹8 - ₹20 LPA"
  }
];

app.get("/jobs", (req, res) => {
  res.json(jobs);
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});