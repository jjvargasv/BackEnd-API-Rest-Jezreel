import { Request, Response } from "express";

const register = ()=>{
    const register = (req: Request, res: Response) =>{
        console.log('registar usuarios');
        res.send('registar usuarios');
    }
}

const login = ()=>{
    
}

export {
    register,
    login
}