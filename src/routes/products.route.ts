/** Archivo central de enrutamiento */
import { Router, Request, Response } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, parcialUpdateProduct, updateProduct } from "../controllers/product.controller";
import { authenticationUser } from "../middleware/authentication.middleware";

const router = Router();
// http://localhost:3000/api/products/
router.get( '/', getProducts );                         // obtiene lista de todos lo productos
router.get( '/:id', getProduct );                       // obtener producto para ID
router.post( '/', authenticationUser, createProduct );   // obtener productos
router.put( '/:id', authenticationUser, updateProduct );                    // actualizar todo el producto
router.patch( '/:id', authenticationUser, parcialUpdateProduct );           // actualizar algunos productos
router.delete( '/:id', authenticationUser, deleteProduct );                 // elimina todo el producto
router.get( '/user/:id',authenticationUser, ( req: Request, res: Response)=>{
    res.json( {
        msg:'TODO Obtener todos lo productos del usuario'
    });
} );                                        

export default router;
