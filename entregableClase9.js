"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express = require("express");
var hbs = require("express-handlebars");
var productos = require('./rutas/productos');
var HttpServer = require('http').Server;
var IOServer = require('socket.io').Server;
//EXPRESS
var app = express();
//IO SOCKET
var httpServer = new HttpServer(app);
var io = new IOServer(httpServer);
app.use(express.static(path_1.default.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', productos);
//HANDLEBARS
app.engine("hbs", hbs.engine({
    extname: "hbs",
    defaultLayout: "layout.hbs",
    layoutsDir: __dirname + "views/layouts",
    partialsDir: __dirname + "views/partials"
}));
app.set("views", "./views");
app.set("view engine", "hbs"); //SETEAMOS EL MOTOR DE PLANTILLA
httpServer.listen(8080, function () {
    console.log("INICIO SERVIDOR: http://localhost:" + httpServer.address().port);
});
httpServer.on('error', function (error) { return console.log("ERROR EN SERVIDOR: " + error); });
