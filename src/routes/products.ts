/* archivo central de enrutamieno */
import { Router, Request, Response } from "express";

const router =Router();

router.get('/', (req:Request, res:Response) =>{
    const msg ='products';

    console.log(msg);
    res.send(`<h1>${msg }</h1>`)
    
});

export default router;
