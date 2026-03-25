import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let clientPromise;

if (!uri) {
  if (process.env.NODE_ENV === "development") {
    console.warn(
      "MONGODB_URI is not set. Add it to your .env.local file.",
    );
  }
  // Return a promise that resolves to null during build time
  clientPromise = Promise.resolve(null);
} else if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  const client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
