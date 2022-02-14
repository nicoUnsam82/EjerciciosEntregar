const express = require("express");
const hbs= require("express-handlebars");
const productos = require('./rutas/productos')
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const path = require('path');



//EXPRESS
const app = express();

//IO SOCKET
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static(path.join(__dirname,'/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', productos);


//HANDLEBARS
app.engine("hbs",hbs.engine({
extname:"hbs",
defaultLayout:"layout.hbs",
layoutsDir:__dirname+"public/views/layouts",
partialsDir:__dirname+"public/views/partials"
})
);
app.set("public/views", "./views/partials");  
app.set("view engine", "hbs"); //SETEAMOS EL MOTOR DE PLANTILLA

//CONEXION IO
io.on("actualizacion_productos", socket => {
    console.log('CLIENTE CONECTADO')  
})
app.io =io;

httpServer.listen(8080, () => {

    console.log(`INICIO SERVIDOR: http://localhost:${httpServer.address().port}`)


});

httpServer.on('error', (error) => console.log(`ERROR EN SERVIDOR: ${error}`));
