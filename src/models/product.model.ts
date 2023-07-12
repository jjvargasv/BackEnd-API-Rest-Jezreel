import { Schema, model } from "mongoose";


 const productSchema= new Schema(
    // objeto princioal definira los atributos del modelo 
    {   
        idProducto: {
            type: Number,
            required: true,
        },
        name: {
            type :String,
            required:true,
        },

        price: {
            type: Number,
            required: false,
        },

        description:{
            type: String,
            required: false,
        },
        inventario:{
            type: Number,
            required: false,
        },
        image:{
            type: String,
            required: false,
        },
        category:{
            type: String,
            required: false,
        },
        marca:{
            type: String,
            required: false,
        },
        userId:{
            type: String,
            required: true,
        },
        ranking:{
            type: Number,
            default: 0,

        },

    }, 


    // definira configuraciones que se puedan aplicar en ese objeto
    {
        timestamps: true  // creara dos campos por defecto createdAt y updatedAt para cada registro de
    }  

    );

    // define el modelo a partir de la estructura requerida por monguse
    const ProductModel = model('products',productSchema);

    export default ProductModel;