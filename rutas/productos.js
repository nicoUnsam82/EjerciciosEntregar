const cl_Contenedor = require("../clases/contenedor.js");
const express = require('express');
const faker = require("@faker-js/faker");
const router = express.Router();

let contenedor = new cl_Contenedor;

const productosAleatorios = () => ({
    id: faker.number.number({ max: 5 }),
    nombreProducto: faker.commerce.productName(),
    precio: faker.number.number({ max: 1000 }),
    urlProducto: faker.image.imageUrl()
})


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
            const producto = await contenedor.guardar(req.body);
            res.send(JSON.stringify(producto));
            req.app.io.sockets.emit("actualizacion_productos", await contenedor.obtenerObjetoEnProductos());
        }//FIN ASYNC
        )();
    }
    catch (e) {


        res.send(e);

    }


});

router.get('/productos-prueba', (req, res) => {
    try {
        (async () => {
            const numeroElementos = 5;
            const resultado = [];
            for (let i = 0; i < numeroElementos; i++) {
                result.push(productosAleatorios(i))
            }
            res.send(JSON.stringify(resultado));
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


