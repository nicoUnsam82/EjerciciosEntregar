"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//USO DE LIBRERIA PARA CLIENTE EN TYPESCRIPT DE IO SOCKET (ADEMAS INSTALAR npm install socket.io-client)
var socket_io_client_1 = require("socket.io-client");
// please note that the types are reversed
var socket = socket_io_client_1.io();
//FIN DE USO DE //USO DE LIBRERIA PARA CLIENTE EN TYPESCRIPT DE IO SOCKET (ADEMAS INSTALAR npm install socket.io-client)
var agregarProducto = document.getElementById("#productoAgregar");
if (agregarProducto) {
    agregarProducto.addEventListener("submit", function (e) {
        e.preventDefault();
    });
}
