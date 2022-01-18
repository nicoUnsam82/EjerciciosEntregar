
import path from "path";
const express = require("express");
const productos = require('./rutas/productos')

const app = express();
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', productos);

const server = app.listen(8080, () => {

    console.log(`INICIO SERVIDOR: http://localhost:${server.address().port}`)


});

server.on('error', (error:any) => console.log(`ERROR EN SERVIDOR: ${error}`));
