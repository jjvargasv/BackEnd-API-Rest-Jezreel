/* archivo central de enrutamieno */
import { Router, Request, Response } from "express";
import { createProducts, deleteProducts, getProduct, getProducts, updateProducts } from "../controllers/product.controller";


const router =Router();
// http://localhost:3000/api/products
router.get('/', getProducts);
router.get( '/:id',getProduct);
router.post( '/', createProducts);
router.put( '/', updateProducts);
router.delete( '/', deleteProducts);

export default router;
