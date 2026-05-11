// Solve DNS Related Issue
// const dns = require("node:dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const app = express();

// Configure DOTENV
// require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config();

const { MongoClient, ServerApiVersion } = require("mongodb");

const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rsynxg9.mongodb.net/?appName=Cluster0`;

// const uri = `mongodb+srv://wanderlust:0iWjo8yDwcrtSbio@cluster0.rsynxg9.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Wanderlust API server is running successfully 🚀");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// 0iWjo8yDwcrtSbio
// wanderlust
