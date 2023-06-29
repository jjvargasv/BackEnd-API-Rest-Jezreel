import  express  from "express";

const app = express();

/** Routing: Enrutamiento */
// http:localhost:3000/ (EndPoint)
app.get( '/', (req, res) => { 

    const message = 'Bienvenido a la API de Jezreel';
    console.log(message);
    res.send(`<h1>${ message} </h1>`);
});

// http:localhost:3000/home   (EndPoint)
app.get( '/home', (req, res) => { 

    const namePage = 'home Jezreel';
    console.log(namePage);
    res.send(`<h1>${ namePage} </h1>`);
});

app.listen(3000,()=>{
    console.log('servidor lanzado en el puerto 3000');
});
