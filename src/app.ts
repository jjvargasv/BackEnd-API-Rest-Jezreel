import 'dotenv/config';
import  express, { Request, Response } from "express";
import routmain from "./routes";


const app = express();
const PORT = process.env.PORT ||3001;

/** Routing: Enrutamiento */
// http:localhost:3000/ (EndPoint)
app.get( '/api', (req:Request, res:Response) => { 

    const message : string = 'Bienvenido a la API de Jezreel';

   
    console.log(message);
    res.send(`<h1>${ message} </h1>`);
});

// http:localhost:3000/home   (EndPoint)
app.get( '/home', (req:Request, res:Response) => { 

    const namePage = 'home Jezreel';
    console.log(namePage);
    res.send(`<h1>${ namePage} </h1>`);
});

//Middleware
app.use('/',routmain);

app.listen(PORT,()=>{
    console.log(`servidor en http://localhost:${ PORT}`);
});
