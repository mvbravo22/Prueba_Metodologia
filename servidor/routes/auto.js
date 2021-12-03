//rutas para autos
// utilizamos el metodo de rutas  es para los direccionamientos de express 
const express =require ('express');
const router = express.Router();
const autoController=require('../controllers/autoController');

//api
//pos cuando se esta enviando un auto 
router.post('/', autoController.crearAuto);
//get se necesita traer datos 
router.get('/', autoController.obtenerAutos);
//put es para editar un dato
router.put('/:id', autoController.actualizarAuto);
router.get('/:id', autoController.obtenerAuto);
// delete para eliminar el auto.
router.delete('/:id', autoController.eliminarAuto);

module.exports = router;



