import Products from "@/models/products";
import { connectToDB } from "@/utils/database";

// RECENT PRODUCTS (Read)
export const GET = async () => {
  try {
    await connectToDB();

    const products = await Products.find({}, null, {
      sort: { updatedAt: -1 },
    }).limit(4);

    if (!products) return new Response("Products not found", { status: 404 });

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all products", { status: 500 });
  }
};
