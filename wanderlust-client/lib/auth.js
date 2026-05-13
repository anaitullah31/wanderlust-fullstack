import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rsynxg9.mongodb.net/?appName=Cluster0`,
);
const db = client.db("wanderlust");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    autoSignIn: false, //defaults to true
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
});
