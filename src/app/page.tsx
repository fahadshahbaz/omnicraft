import HomeClient from "./HomeClient";
import clientPromise from "@/utils/mongodb";
import type { Resource } from "@/types";

export default async function Page() {
	let resources: Resource[] = [];
	try {
		const client = await clientPromise;
		if (client) {
			const db = client.db("omnicraft");
			const docs = await db.collection("resources").find({}).sort({ _id: 1 }).toArray();
			resources = docs.map(({ _id, ...rest }) => ({
				id: _id.toString(),
				title: rest.title || "",
				description: rest.description || "",
				img: rest.img || "",
				link: rest.link || "",
				tags: rest.tags || [],
			}));
		}
	} catch (error) {
		console.error("Failed to fetch resources from MongoDB:", error);
	}
	return <HomeClient initialResources={resources} />;
}
