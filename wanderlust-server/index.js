// Solve DNS Related Issue
// const dns = require("node:dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const app = express();
const cors = require("cors");

// Configure DOTENV
// require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

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

    const destinationCollection = client
      .db("wanderlust")
      .collection("destination");

    app.get("/api/v1/destinations", async (req, res) => {
      try {
        const result = await destinationCollection.find().toArray();

        res.status(200).json({
          success: true,
          message: "Destinations retrieved successfully",
          total: result.length,
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to retrieve destinations",
          error: error.message,
        });
      }
    });

    app.post("/api/v1/destinations", async (req, res) => {
      try {
        const destinationData = req.body;

        const result = await destinationCollection.insertOne(destinationData);

        res.status(201).json({
          success: true,
          message: "Destination added successfully",
          insertedId: result.insertedId,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to add destination",
          error: error.message,
        });
      }
    });

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
