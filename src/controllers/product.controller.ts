
import { Request, Response } from "express";


function getProducts(rep:Request, res:Response) {
    console.log('Obtengo todos los productos');
    
}
function getProduct(rep:Request, res:Response) {
    console.log('Obtengo un productos por ID');
}
function createProducts(rep:Request, res:Response) {
    console.log('Crea productos');
}
function updateProducts(rep:Request, res:Response) {
    console.log('actualiza productos');
}

function deleteProducts(rep:Request, res:Response) {
    console.log('Eliminia productos');
}

export {
    getProducts,
    getProduct,
    createProducts,
    updateProducts,
    deleteProducts
}