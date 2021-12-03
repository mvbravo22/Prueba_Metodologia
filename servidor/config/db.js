// mongoose sirve para trabajar con angular y mongodb  
const mongoose= require('mongoose');
//llama a la direccion del servidor de base datos.
require('dotenv').config({path:'variables.env'});
//creamos la constante conectarDB /conectar a la base de datos mongo.
const conectarDB = async()=>{
    try{
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })
        console.log("bd conectada");
    }catch(error){
        console.log(error);
        process.exit(1); //detener la app
    }
}
module.exports= conectarDB