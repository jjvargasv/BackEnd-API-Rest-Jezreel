
import { Request, Response } from "express";


async function getProducts(rep:Request, res:Response) {
    console.log('Obtengo todos los productos');
    res.send('Obtengo todos los productos');
}
async function getProduct(rep:Request, res:Response) {
    console.log('Obtengo un productos por ID');
    res.send('Obtengo un productos por ID');
}
async function createProducts(rep:Request, res:Response) {
    console.log('Crea productos');
    res.send('Crea productos');
}
async function updateProducts(rep:Request, res:Response) {
    console.log('actualiza productos');
    res.send('actualiza productos');
}

async function deleteProducts(rep:Request, res:Response) {
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