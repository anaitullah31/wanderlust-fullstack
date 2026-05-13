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

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

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
    const bookingCollection = client.db("wanderlust").collection("bookings");
    const reviewsCollection = client
      .db("wanderlust")
      .collection("travelerreviews");

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

    // DESTINATIONS OPERATIONS
    app.get("/api/v1/destinations/:id", async (req, res) => {
      try {
        const { id } = req.params;

        const result = await destinationCollection.findOne({
          _id: new ObjectId(id),
        });

        if (!result) {
          return res.status(404).json({
            success: false,
            message: "Destination not found",
          });
        }

        res.status(200).json({
          success: true,
          message: "Destination retrieved successfully",
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to retrieve destination",
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

    app.patch("/api/v1/destinations/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const updatedData = req.body;

        const result = await destinationCollection.updateOne(
          {
            _id: new ObjectId(id),
          },
          {
            $set: updatedData,
          },
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({
            success: false,
            message: "Destination not found",
          });
        }

        res.status(200).json({
          success: true,
          message: "Destination updated successfully",
          modifiedCount: result.modifiedCount,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to update destination",
          error: error.message,
        });
      }
    });

    app.delete("/api/v1/destinations/:id", async (req, res) => {
      try {
        const { id } = req.params;

        const result = await destinationCollection.deleteOne({
          _id: new ObjectId(id),
        });

        if (result.deletedCount === 0) {
          return res.status(404).json({
            success: false,
            message: "Destination not found",
          });
        }

        res.status(200).json({
          success: true,
          message: "Destination deleted successfully",
          deletedCount: result.deletedCount,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to delete destination",
          error: error.message,
        });
      }
    });

    // BOOKINGS OPERATIONS
    app.get("/api/v1/bookings/:userId", async (req, res) => {
      try {
        const { userId } = req.params;

        const result = await bookingCollection.find({ userId }).toArray();

        res.status(200).send({
          success: true,
          message: "Bookings fetched successfully",
          data: result,
        });
      } catch (error) {
        res.status(500).send({
          success: false,
          message: "Failed to fetch bookings",
          error: error.message,
        });
      }
    });

    app.post("/api/v1/booking", async (req, res) => {
      try {
        const bookingData = req.body;

        const result = await bookingCollection.insertOne(bookingData);

        res.status(201).send({
          success: true,
          message: "Booking created successfully",
          insertedId: result.insertedId,
          data: result,
        });
      } catch (error) {
        res.status(500).send({
          success: false,
          message: "Failed to create booking",
          error: error.message,
        });
      }
    });

    app.delete("/api/v1/bookings/:bookingId", async (req, res) => {
      try {
        const { bookingId } = req.params;

        const result = await bookingCollection.deleteOne({
          _id: new ObjectId(bookingId),
        });

        if (result.deletedCount === 0) {
          return res.status(404).send({
            success: false,
            message: "Booking not found",
          });
        }

        res.status(200).send({
          success: true,
          message: "Booking deleted successfully",
          deletedCount: result.deletedCount,
        });
      } catch (error) {
        res.status(500).send({
          success: false,
          message: "Failed to delete booking",
          error: error.message,
        });
      }
    });
    // REVIEWS OPERATIONS
    app.get("/api/v1/travelerreviews", async (req, res) => {
      try {
        const result = await reviewsCollection.find().toArray();

        res.status(200).json({
          success: true,
          message: "Traveler reviews retrieved successfully",
          total: result.length,
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to retrieve traveler reviews",
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
