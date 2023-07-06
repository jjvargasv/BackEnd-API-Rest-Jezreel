import { product } from "../interfaces/product.interface";
import ProductModel from "../models/product.model";

const insertProduct = async(product: product)=> {
    const response = await ProductModel.create(product);

    return response;
}

const getAllProducts = async() =>{
      return await  ProductModel.find({});
}

const getProductById = async(productId:string)=> {
    return await ProductModel.findOne({_id: productId});
} 
export { 
    insertProduct,
    getAllProducts,
    getProductById
 }