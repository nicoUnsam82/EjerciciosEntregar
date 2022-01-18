import Contenedor from "../clases/contenedor.js";

const express = require('express');
const router = express.Router();

let contenedor: Contenedor = new Contenedor;

router.get('/productos', (req: any, res: any) => {
    (async () => {
        const productos = await contenedor.obtenerObjetoEnProductos();
        res.send(JSON.stringify(productos));
        console.log(productos);
    }//FIN ASYNC
    )();
});

router.post('/productos', (req: any, res: any) => {
    (async () => {
        console.log(req.body);
        const producto = await contenedor.guardar(req.body);
        res.send(JSON.stringify(producto));

    }//FIN ASYNC
    )();

});

router.get('/productos/:id', (req: any, res: any) => {
    (async () => {
      
        if(isNaN(req.params.id)){
            res.send({ error:"el parametro no es numero"});

        }
        else{
            const producto = await contenedor.obtenerObjetoPorId(req.params.id);
            res.send(JSON.stringify(producto));
            console.log(`${producto}`);

        }
        
    }//FIN ASYNC
    )();
});

router.put('/productos/:id', (req: any, res: any) => {
    (async () => {
        if(isNaN(req.params.id)){
            res.send({ error:"el parametro no es numero"});

        }
        else{
        const producto = await contenedor.actualizarObjetoPorId(req.params.id, req.body);
        res.send(`id actualizado ${req.params.id} y producto actualizado:${JSON.stringify(producto)}` );
        console.log(`${producto}`);
        }
    }//FIN ASYNC
    )();
});

router.delete('/productos/:id', (req: any, res: any) => {
    (async () => {
        if(isNaN(req.params.id)){
            res.send({ error:"el parametro no es numero"});

        }
        else{
            const producto = await contenedor.borrarObjetoPorId(req.params.id);
            res.send(`id eliminado: ${req.params.id} y producto eliminado:${JSON.stringify(producto)}`);
            
        }
        
    }//FIN ASYNC
    )();
});

module.exports = router;


