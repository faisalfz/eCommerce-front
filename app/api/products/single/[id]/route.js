import Products from "@/models/products";
import { connectToDB } from "@/utils/database";

// SINGLE (READ)
export const GET = async (request, {params}) => {

  try {
      await connectToDB()
     
      const products = await Products.findById(params.id);


      if(!products) return new Response('Products not found', {status:404})

      return new Response(JSON.stringify(products), {status:200})
      

  } catch (error) {
      return new Response("Failed to fetch all products", { status: 500 })
  }
}
