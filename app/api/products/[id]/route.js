import connectMongoDb from "@/lib/mongoDb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newProductName: productName, newDescription: description, newPrice: price, newQuantity: quantity, } = await request.json();
  await connectMongoDb();
  await Product.findByIdAndUpdate(id, { productName, description, price, quantity});
  return NextResponse.json({ message: "Product updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDb();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}
