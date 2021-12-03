const mongoose = require('mongoose');

//creamos el esquema de como se va guardar en la base de datos.
const AutoSchema = mongoose.Schema({
    placa: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    kilometraje: {
        type: Number,
        required: true
    },
    nacientos: {
        type: Number,
        required: true
    },
    foto: {
        type: String,
        
        required: true
    }
    
});




module.exports = mongoose.model('Auto', AutoSchema);