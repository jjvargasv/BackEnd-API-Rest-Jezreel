
import { Request, Response } from "express";
import ProductModel from "../models/product.model";


async function getProducts(req:Request, res:Response) {
    console.log('Obtengo todos los productos');
    res.send('Obtengo todos los productos');
}
async function getProduct(req:Request, res:Response) {
    console.log('Obtengo un productos por ID');
    res.send('Obtengo un productos por ID');
}
async function createProducts(req:Request, res:Response) {
    const data = req.body;
   
    const response = await ProductModel.create(data);
    res.json(response)

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