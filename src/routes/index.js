// Este es el archivo que contendrá todas nuestras rutas

//importamos el router
const router = require('express').Router();

//importamos nuestra primera ruta 
const helloRoute = require('./hello');

//path de la nueva ruta
router.use('/hello', helloRoute);

//exportamos la nueva ruta
module.exports = router;