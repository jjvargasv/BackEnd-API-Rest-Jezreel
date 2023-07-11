import 'dotenv/config';
import { compare, hash } from "bcryptjs";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import AuthModel from "../models/auth.model";
import { sign } from "jsonwebtoken";

const registerNewUser = async ( newUser: User ) => {
    // 1. Consultar en la BD si existe el usuario
    const userFound = await AuthModel.findOne({ email: newUser.email });

    // Verificar si el usuario existe
    if( userFound ) {
        return 'USER_ALREADY_EXISTS';
    }

    // 2. encrictar la contraseña
    const hashPassword = await hash (newUser.password, 9);
    newUser.password = hashPassword;
    // 3. Registra el usuario si no existe
    const response = await AuthModel.create( newUser );

    return response;
}

const loginUser = async ( user: Auth ) => {
    const userFound = await AuthModel.findOne({ email: user.email });

    // verificando si el usuario no existe
    if(! userFound){
        return 'USER_NOT_FOUND';
    }
    
    

    // 1. verificando si la contraseña es correcta
    const isValidPassword = await compare(
        user.password,  // password sunimistrado por el usuario (no es un hash)
        userFound.password // password hash que se encuentra en la BD
    );

    // 2.  verificando si la contraseña es correcta
    if(! isValidPassword ){
            return 'WRONG_PASSWORD';
    }

    const JWT_SECRET = process.env.JWT_SECRET_KEY || '0tr4-cl4v3-s3cr3ta';
    // 3. crear el token
    const token = sign(
    // payload: carga util
    {
        userId: userFound._id,
        rol: userFound.rol,
        nombre: userFound.nombre,
    },
    // string secret
    JWT_SECRET,
    // configuuracion
    {
        expiresIn: "1h",
    }
);

return {
      token,
}


}

export {
    registerNewUser,
    loginUser
};