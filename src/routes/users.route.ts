/* archivo de rutas */
import { Router, Request, Response } from "express";

const router =Router();

router.get('/', (req:Request, res:Response) =>{
    const msg ='users';

    console.log(msg);
    res.send(`<h1>${msg }</h1>`)
    
});

export default router;
