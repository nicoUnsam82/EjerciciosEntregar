const express = require("express");
const hbs= require("express-handlebars");
const productos = require('./rutas/productos');
const cl_ContenedorBd= require("./clases/contenedorBd");
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const path = require('path');
const contenerdorMensajes = require('./clases/contenedorMsj');

//BASE DE DATOS PARA MENSAJES
const contenedorSqlite = new cl_ContenedorBd(
    {
      client: "sqlite3",
      connection: { filename: "./mydb.sqlite" },
    },
    "mensajes"
  );
//EXPRESS
const app = express();

//IO SOCKET
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static(path.join(__dirname,'/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', productos);

const mensajesApi=new contenerdorMensajes;

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
io.on('connection', async socket => {
    console.log('CLIENTE CONECTADO') 
// CARGA DE MENSAJES
socket.emit('mensajes', await mensajesApi.listarTodo());

//ACTUALIZACION DE MENSAJES
socket.on('nuevoMensaje', async mensaje => {
    mensaje.fyh = new Date().toLocaleString()
    await mensajesApi.guardar(mensaje);
    io.sockets.emit('mensajes', await mensajesApi.listarTodo());
//FIN DE MENSAJES

});    
});

app.io =io;



httpServer.listen(8080, () => {

    console.log(`INICIO SERVIDOR: http://localhost:${httpServer.address().port}`)


});

httpServer.on('error', (error) => console.log(`ERROR EN SERVIDOR: ${error}`));
