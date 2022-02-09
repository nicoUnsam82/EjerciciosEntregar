
import path from "path";
const express = require("express");
const hbs= require("express-handlebars");
const productos = require('./rutas/productos')
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

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
layoutsDir:__dirname+"views/layouts",
partialsDir:__dirname+"views/partials"
})
);
app.set("views", "./views");  
app.set("view engine", "hbs"); //SETEAMOS EL MOTOR DE PLANTILLA



httpServer.listen(8080, () => {

    console.log(`INICIO SERVIDOR: http://localhost:${httpServer.address().port}`)


});

httpServer.on('error', (error:any) => console.log(`ERROR EN SERVIDOR: ${error}`));
