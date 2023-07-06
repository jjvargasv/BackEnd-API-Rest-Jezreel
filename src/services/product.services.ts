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

const updateProductById = async (productId:string, updateProduct:product) => {
    return await ProductModel.findOneAndUpdate(
        {_id: productId },
        updateProduct,
        {new: true}
        
    );

}
const deleteProductById = async (productId:string)=> {
    return await ProductModel.findOneAndRemove({_id: productId});
}

export { 
    insertProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
    
 }