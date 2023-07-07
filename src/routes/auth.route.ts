import { Router, Request, Response } from "express";
import { createProducts, deleteProducts, getProduct, getProducts, updateProducts } from "../controllers/product.controller";

const router = Router();

router.post('/register', (req: Request, res: Response) =>{
    console.log('creamos usuarios');
    res.send('creamos usuario');
});

router.post('/login', (req: Request, res: Response) =>{
    console.log('login usuarios');
    res.send('login usuario');
})

export default router;