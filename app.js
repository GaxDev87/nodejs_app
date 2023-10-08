//**CREANDO UN MICROSERVICIO CON NODE JS, EXPRESS Y DOCKER **/

const express = require('express');

//libreria que sirve para hacer peticiones desde cualquier dominio
const cors =require('cors');

//libreria que nos permite encontrar las rutas de un html
const path = require('path');

//creamos la estructura de carpetas para las rutas
const router = require('./src/routes');

const {json, urlencoded} =express;

//creamos nuestro servidor express 
const app =express();


//lee decimos al servidor que use json para los mensajes
app.use(json());

//acceder al contenido de la url
app.use(urlencoded({extended:false}));
//variable de entorno o puerto por el cual se va a exponer el servidor

const port = process.env.PORT || 8080;

//para que cualquier origen pueda accesar a nuestro servicio
const corsOptions ={
    origin: '*',
    optionsSuccessStatus:200
}

app.use(cors(corsOptions));

//añadimos router para crear rutas

app.use('/', router);

// app.use('/', (req, res) => {
//     res.send("This is microservise 1 and version v2.0.0")
// });


//añadimos la ruta de nuestro archivo html al servidor
app.use('/home', function(req, res) {
        res.sendFile(path.join(__dirname+'/src/html/index.html'));
});


//creamos la ruta raiz del servidor
app.use('/', function(req, res) {
        res.send("This is microservise 1 and version v2.0.0")
});



//añadimos el puerto que usara el servidor para escuchar peticiones

app.listen(port, () =>
{

    console.log("listening on port " + port);

    console.log("The server is starting...");

    console.log("the server has started!");


})