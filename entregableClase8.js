"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express = require("express");
var productos = require('./rutas/productos');
var app = express();
app.use(express.static(path_1.default.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', productos);
var server = app.listen(8080, function () {
    console.log("INICIO SERVIDOR: http://localhost:" + server.address().port);
});
server.on('error', function (error) { return console.log("ERROR EN SERVIDOR: " + error); });
