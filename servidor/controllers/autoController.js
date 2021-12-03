const Auto = require("../models/Auto");
exports.crearAuto = async (req, res) => {
    try {
        let auto;
        // Creamos nuestro aut
        auto = new Auto(req.body);
        await auto.save();
        //res dato requerido
     res.send(auto);
        if(req.file){
            const {filename} = req.file;
            auto.setImgUrl(filename);
        }
    } catch (error) {
        console.log(error);
        // dato respondido.
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerAutos = async (req, res) => {
    try {
        const auto= await Auto.find();
        res.json(auto)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.actualizarAuto = async (req, res) => {

    try {
        const { placa, marca, modelo, color, kilometraje, nacientos, foto } = req.body;
        let auto = await Auto.findById(req.params.id);

        if(!auto) {
            res.status(404).json({ msg: 'No existe el auto' })
        }

        auto.placa = placa;
        auto.marca = marca;
        auto.modelo= modelo;
        auto.color = color;
        auto.kilometraje = kilometraje;
        auto.nacientos = nacientos;
        auto.foto = foto;
        

        auto= await Auto.findOneAndUpdate({ _id: req.params.id },auto, { new: true} )
        res.json(auto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerAuto= async (req, res) => {

    try {
        let auto = await  Auto.findById(req.params.id);

        if(!auto) {
            res.status(404).json({ msg: 'No existe el autodd' })
        }
       
        res.json(auto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarAuto = async (req, res) => {

    try {
        let auto = await Auto.findById(req.params.id);

        if(!auto) {
            res.status(404).json({ msg: 'No existe el auto' })
        }
       
        await Auto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Auto eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}