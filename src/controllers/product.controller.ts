
import { Request, Response } from "express";
import {deleteProductById, getAllProducts, getProductById, insertProduct} from "../services/product.services";


async function getProducts(req:Request, res:Response) {
   try{
        const response =await getAllProducts(),
             data = response ? response: 'NOT_FOUND';
            console.log(data);
            res.json(data);
        
    } 
    catch (error) {
        console.log('Error al insertar el producto');
        res.json({
            msg: 'ERROR_PRODUCT_LIST'
        });
        
    }
}
async function getProduct(req:Request, res:Response) {
        
    const productId = req.params.id;
    try {
        const response = await getProductById(productId);
        console.log(res);
       res.json(response);
    } 
    catch (error) {
        console.log( `Error en la extraccion del producto con id: ${productId}`);
        res.json({
            msg: 'ERROR_INSERT_PRODUCT'
        });
        
    }
}
async function createProducts(req:Request, res:Response) {
    console.log(req.body);

    try {
        const data =await insertProduct(req.body);
        console.log(data);
        res.json(data);
    } 
    catch (error) {
        console.log('Error al insertar el producto');
        res.json({
            msg: 'ERROR_INSERT_PRODUCT'
        });
        
    }
    
    

}
async function updateProducts(req:Request, res:Response) {
    console.log('actualiza productos');
    res.send('actualiza productos');
}

async function deleteProducts(req:Request, res:Response) {
    const productId = req.params.id;
    try {
        const response = await deleteProductById(productId);
        console.log(res);
        res.json(response);
    } catch (err) {
        console.log( `Error en la eliminacion del producto con id: ${productId}`);
        res.json({
            msg: 'ERROR_DELETE_PRODUCT'
        });
    }
    
}

export {
    getProducts,
    getProduct,
    createProducts,
    updateProducts,
    deleteProducts
}