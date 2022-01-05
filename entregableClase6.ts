import Contenedor from "./contenedor.js";

const express = require("express");


export default interface Producto {
    nombreProducto: string;
    precio: number;
    thumbnail: string;
    id: number;
   
}

const app = express();


let productoUno: Producto = {

    nombreProducto: "TV",
    precio: 120,
    thumbnail: "http://TV",
    id: 0
};//ID CERO ES NO ASIGNADO
let productoDos: Producto = {

    nombreProducto: "GUITARRA",
    precio: 100,
    thumbnail: "http://GUITARRA",
    id: 0
};//ID CERO ES NO ASIGNADO
let productoTres: Producto = {

    nombreProducto: "PELOTA",
    precio: 12,
    thumbnail: "http://PELOTA",
    id: 0
};//ID CERO ES NO ASIGNADO
let productoCuatro: Producto = {

    nombreProducto: "BICICLETA",
    precio: 50,
    thumbnail: "http://BICICLETA",
    id: 0
};//ID CERO ES NO ASIGNADO
let productoCinco: Producto = {

    nombreProducto: "PALA",
    precio: 80,
    thumbnail: "http://PALA",
    id: 0
};//ID CERO ES NO ASIGNADO

let contenedor: Contenedor = new Contenedor("TV");


app.get("/productos", (req: any, res: any) => {

    (
        async () => {
            const productos = await contenedor.obtenerObjetoEnProductosJson();

            res.send(productos);
        }//FIN ASYNC
    )();
});//FIN DEL GET


app.get("/productoRandom", (req: any, res: any) => {
    const randomInt:number = Math.floor(Math.random() * 5) + 1;
    
    //res.send(`${randomInt}`);
    (
        async () => {
            const productoRandom = await contenedor.obtenerObjetoPorId(randomInt);
            res.send(productoRandom);
            console.log(randomInt);
        }//FIN ASYNC
    )();
   
});//FIN DEL GET


const server = app.listen(3000, () => {

    console.log(`INICIO SERVIDOR: http://localhost:${server.address().port}`)


});


