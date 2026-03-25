import clientPromise from "@/utils/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    if (!client) {
      return Response.json([]);
    }
    const db = client.db("omnicraft");
    const resources = await db
      .collection("resources")
      .find({})
      .sort({ _id: 1 })
      .toArray();

    // Convert MongoDB _id to string for JSON serialization
    const sanitized = resources.map(({ _id, ...rest }) => ({
      id: _id.toString(),
      ...rest,
    }));

    return Response.json(sanitized);
  } catch (error) {
    console.error("Error fetching resources:", error);
    return Response.json(
      { error: "Failed to fetch resources" },
      { status: 500 },
    );
  }
}
