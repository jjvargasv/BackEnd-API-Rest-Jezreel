import {connect} from 'mongoose';

//TODO: resolver conexion de mongoose

async function  dbconnect() {
    
        
   
    const DB_URI = 'mongodb://localhost:27017';
    await connect(DB_URI);
}

export default dbconnect