
import { Request, Response } from "express";
import {getAllProducts, insertProduct} from "../services/product.services";


async function getProducts(req:Request, res:Response) {
   try{
        const response =await getAllProducts();
        console.log(response);
        res.json(response);
    } 
    catch (error) {
        console.log('Error al insertar el producto');
        res.json({
            msg: 'ERROR_PRODUCT_LIST'
        });
        
    }
}
async function getProduct(req:Request, res:Response) {
    console.log('Obtengo un productos por ID');
    res.send('Obtengo un productos por ID');
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
    console.log('Eliminia productos');
    res.send('Eliminia productos');
}

export {
    getProducts,
    getProduct,
    createProducts,
    updateProducts,
    deleteProducts
}