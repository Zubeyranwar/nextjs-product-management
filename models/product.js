import mongoose, { Schema } from "mongoose";

export const productSchema = new Schema(
    {
        productName : String,
        description : String,
        price : Number,
        quantity : Number 
    },
    {
        timestamps: true
    }
)

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)
export default Product