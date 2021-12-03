//utilizamos express para el servidor
const express= require('express');
//configuracion de la base de datos.
const conectarDB = require('./config/db');
//ayuda a ver la ejecucion del servidor 
const cors= require('cors');
// sirve para ir observando el funcionamiento del servidor.
const morgan = require('morgan');
//inicializamos el express 
const app =express();
//llamamos a la funcion conectar BD que no ayudara entrelarzarnos con la base de datos correspodiente.
conectarDB();
//middlewares   herramientas que ejecutan antes del servidor.
app.use(cors())
app.use(express.json());
app.use('/api/autos', require('./routes/auto'));
app.use(morgan('dev'));
// nodo de http server funciona express
app.listen(4000,()=>{
    console.log("puerto iniciado");
})


