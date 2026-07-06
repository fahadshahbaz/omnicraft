import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let clientPromise: Promise<MongoClient | null>;

if (!uri) {
	if (process.env.NODE_ENV === "development") {
		console.warn("MONGODB_URI is not set. Add it to your .env.local file.");
	}
	// Return a promise that resolves to null during build time
	clientPromise = Promise.resolve(null);
} else if (process.env.NODE_ENV === "development") {
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	const globalWithMongo = global as typeof globalThis & {
		_mongoClientPromise?: Promise<MongoClient>;
	};
	if (!globalWithMongo._mongoClientPromise) {
		const client = new MongoClient(uri, options);
		globalWithMongo._mongoClientPromise = client.connect();
	}
	clientPromise = globalWithMongo._mongoClientPromise;
} else {
	const client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

export default clientPromise;
