import { Schema, model } from "mongoose";


 const productSchema= new Schema(
    // objeto princioal definira los atributos del modelo 
    {
        name: {
            type :String,
            required:true
        },

        price: {
            type: Number,
            required: false
        },

        description:{
            type: String
        },
    }, 


    // definira configuraciones que se puedan aplicar en ese objeto
    {
        timestamps: true  // creara dos campos por defecto createdAt y updatedAt para cada registro de
    }  

    );

    // define el modelo a partir de la estructura requerida por monguse
    const productModel = model('products',productSchema);

    export default productModel;