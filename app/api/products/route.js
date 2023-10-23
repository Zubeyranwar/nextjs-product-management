import connectMongoDb from "../../../lib/mongoDb";
import Product from "../../../models/product";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { productName, description, price, quantity, } = await request.json();
  await connectMongoDb();
  await Product.create({ productName, description, price, quantity});
  return NextResponse.json({ message: "Product created" }, { status: 201 });
}


export async function GET(){
   await connectMongoDb()
   const products = await Product.find()
   return NextResponse.json({products})
}

export async function DELETE(request){
   const id = request.nextUrl.searchParams.get('id')
   await connectMongoDb()
   await Product.findByIdAndDelete(id)
   return NextResponse.json({message : "Product deleted"}, {status : 200})
}
