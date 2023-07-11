import { Request, Response } from "express";
import { registerNewUser } from "../services/auth.service";
import { loginUser } from "../services/auth.service";

const register = async ( req: Request, res: Response ) => {
    const user = req.body;
    // const { body } = req;

    try {
        const response = await registerNewUser( user );

        res.json( response );
    } catch (error) {
        console.log( `Error en el registro del usuario` );
        res.json({
            msg: 'ERROR_REGISTER_USER'
        });
    }
    
}

const login = async ( req: Request, res: Response ) => {
    const user = req.body;
   try {
    const response = await loginUser( user);
    console.log(response);
    res.json({response});
    

   } catch (error) {
       console.log( `Error en el login del usuario` );
       res.json({
           msg: 'ERROR_LOGIN_USER'
       });
   }
}

export {
    register, 
    login
};