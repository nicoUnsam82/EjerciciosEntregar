const cl_Contenedor= require("../clases/contenedor.js");
const cl_ContenedorBd= require("../clases/contenedorBd");


const express = require('express');
const router = express.Router();

let contenedor = new cl_Contenedor;
const contenedorMysql = new cl_ContenedorBd(
    {
      client: "mysql",
      connection: {
        host: "127.0.0.1",
        user: "root",
        database: "productos",
      },
      pool: { min: 0, max: 7 },
    },
    "productos"
  );
//CREAMOS TABLA DE PRODUCTOS
contenedorMysql.crearTabla().then(console.log);

router.get('/productos', (req, res) => {

    try {
        (async () => {
            const productos = await contenedor.obtenerObjetoEnProductos();
            res.send(JSON.stringify(productos));
            console.log(productos);
        }//FIN ASYNC
        )();
    }
    catch (e) {

        res.send(e);

    }

});

router.post('/productos', (req, res) => {
    try {
        (async () => {
            console.log(req.body);
            await contenedorMysql.guardar(req.body);
            const productos = await contenedorMysql.obtenerDatosBase();
            console.log(productos);
            //const producto = await contenedor.guardar(req.body);
            //res.send(JSON.stringify(producto));
            req.app.io.sockets.emit("actualizacion_productos",productos);
        }//FIN ASYNC
        )();
    }
    catch (e) {


        res.send(e);

    }


});

router.get('/productos/:id', (req, res) => {

    try {
        (async () => {

            if (isNaN(req.params.id)) {
                res.send({ error: "el parametro no es numero" });

            }
            else {
                const producto = await contenedor.obtenerObjetoPorId(req.params.id);
                res.send(JSON.stringify(producto));
                console.log(`${producto}`);

            }

        }//FIN ASYNC

        )();

    }
    catch (e) {

        res.send(e);


    }

});

router.put('/productos/:id', (req, res) => {

    try {
        (async () => {
            if (isNaN(req.params.id)) {
                res.send({ error: "el parametro no es numero" });

            }
            else {
                const producto = await contenedor.actualizarObjetoPorId(req.params.id, req.body);
                res.send(`id actualizado ${req.params.id} y producto actualizado:${JSON.stringify(producto)}`);
                console.log(`${producto}`);
            }
        }//FIN ASYNC
        )();

    }
    catch (e) {

        res.send(e);

    }

});

router.delete('/productos/:id', (req, res) => {
    try {

        (async () => {
            if (isNaN(req.params.id)) {
                res.send({ error: "el parametro no es numero" });

            }
            else {
                const producto = await contenedor.borrarObjetoPorId(req.params.id);
                res.send(`id eliminado: ${req.params.id} y producto eliminado:${JSON.stringify(producto)}`);

            }

        }//FIN ASYNC
        )();
    }
    catch (e) {

        res.send(e);

    }

});

module.exports = router;


