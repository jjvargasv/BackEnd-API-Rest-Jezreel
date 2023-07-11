/** Archivo central de enrutamiento */
import { Router, Request, Response } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, parcialUpdateProduct, updateProduct } from "../controllers/product.controller";


const router = Router();
// http://localhost:3000/api/products/
router.get( '/', getProducts );     // obtiene lista de todos lo productos
router.get( '/:id', getProduct );   // obtener producto para ID
router.post( '/', createProduct );  // obtener productos
router.put( '/:id', updateProduct );    // actualizar todo el producto
router.patch( '/:id', parcialUpdateProduct ); // actualizar algunos productos
router.delete( '/:id', deleteProduct );         // elimina todo el producto


export default router;
