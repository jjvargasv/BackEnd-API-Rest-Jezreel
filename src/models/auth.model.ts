import { Schema, model } from "mongoose";

export const UserSchema = new Schema({ 
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },  
    rol:{
        type: String,
        required: true
        default: "",
    }
});