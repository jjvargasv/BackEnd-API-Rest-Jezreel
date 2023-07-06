import { product } from "../interfaces/product.interface";
import ProductModel from "../models/product.model";

const insertProduct = async(product: product)=> {
    const response = await ProductModel.create(product);

    return response;
}

const getAllProducts = async() =>{
      return await  ProductModel.find({});
}

export { 
    insertProduct,
    getAllProducts
 }