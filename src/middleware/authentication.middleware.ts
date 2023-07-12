import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { RequestExtends } from "../interfaces/RequestExtends.interfaces";



const authenticationUser = (req: RequestExtends, res: Response, next: NextFunction) => {

    try {
        // 1. prosesando la cadena de autorización para extraer el token para
        const bearerToken = req.headers.authorization || '';  //bearertoken = bearer 99999999
        const arrBearerToken = bearerToken.split(' ');        // arrBearerToken = ['bearer', '99999999']
        const token = arrBearerToken.pop();                   // token = 99999999

        //2.verificar la autenticidad del token 
        const payload = verify(`${token}`,`${process.env.JWT_SECRET_KEY}`);

        // 3. verificar si No hay carga util
        if (!payload) {
                return res.json({
                    msg: 'INVALID_ACCESS_TOKEN'
                })
            }
        // 4. extraer la carga util
        const {userId, rol, name}=payload as {userId: string, rol: string, name: string};

        // agregamos los datos al request
        req.authUsers = {userId, rol, name};

        console.log(userId, rol, name);


        next()
    } 
    
    catch ( error ) {
        res.json({
            msg: 'INVALID_AUTENTICATION'
        })
        
    }
    
}


export{
    authenticationUser
}