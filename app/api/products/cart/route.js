import Products from "@/models/products";
import { connectToDB } from "@/utils/database";

// GET (Read)
// export const GET = async (request, { params }) => {
//   try {
//     await connectToDB();
//     const ids = request.body.ids;
//     // const {cartIds} = params(cartIds);
//     // console.log('IDs: ', cartIds)
//     console.log("IDS: ", ids)
//     const products = await Products.find({ _id: ids });

//     if (!products) {
//       return new Response("Products not found", { status: 404 });
//     }

//     return new Response(JSON.stringify(products), { status: 200 });
//   } catch (error) {
//     return new Response("Failed to fetch products", { status: 500 });
//   }
// };

// export const POST = async (request, { params }) => {
//   try {
//     await connectToDB();
//     const ids  = JSON.parse(request.ids);
//     console.log("IDS: ", ids)
//     const products = await Products.find({_id: request.body.ids});

//     if (!products) {
//       return new Response("Products not found", { status: 404 });
//     }

//     return new Response(JSON.stringify(products), { status: 200 });
//   } catch (error) {
//     return new Response("Failed to fetch products", { status: 500 });
//   }
// };

// RECENT PRODUCTS (Read)
// export default GET = async () => {
//   try {
//     await connectToDB();

//     const ids = req.body.ids;
//     console.log('IDs: ', ids)
//     res.json(await Products.find({ _id: ids }));


//     // if (!products) return new Response("Products not found", { status: 404 });

//     // return new Response(JSON.stringify(products), { status: 200 });
//   } catch (error) {
//     return new Response("Failed to fetch all products", { status: 500 });
//   }
// };

export const GET = async () => {
  try {
    await connectToDB();

    const products = await Products.find();

    if (!products) return new Response("Products not found", { status: 404 });

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all products", { status: 500 });
  }
};
