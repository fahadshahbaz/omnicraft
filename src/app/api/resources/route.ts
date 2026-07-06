import clientPromise from "@/utils/mongodb";
import type { Resource } from "@/types";

export async function GET(): Promise<Response> {
	try {
		const client = await clientPromise;
		if (!client) {
			return Response.json([]);
		}
		const db = client.db("omnicraft");
		const resources = await db.collection("resources").find({}).sort({ _id: 1 }).toArray();

		// Convert MongoDB _id to string for JSON serialization
		const sanitized: Resource[] = resources.map(({ _id, ...rest }) => ({
			id: _id.toString(),
			title: rest.title || "",
			description: rest.description || "",
			img: rest.img || "",
			link: rest.link || "",
			tags: rest.tags || [],
		}));

		return Response.json(sanitized);
	} catch (error) {
		console.error("Error fetching resources:", error);
		return Response.json({ error: "Failed to fetch resources" }, { status: 500 });
	}
}
