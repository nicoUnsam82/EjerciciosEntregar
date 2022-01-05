"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var contenedor_js_1 = __importDefault(require("./contenedor.js"));
var express = require("express");
var app = express();
var productoUno = {
    nombreProducto: "TV",
    precio: 120,
    thumbnail: "http://TV",
    id: 0
}; //ID CERO ES NO ASIGNADO
var productoDos = {
    nombreProducto: "GUITARRA",
    precio: 100,
    thumbnail: "http://GUITARRA",
    id: 0
}; //ID CERO ES NO ASIGNADO
var productoTres = {
    nombreProducto: "PELOTA",
    precio: 12,
    thumbnail: "http://PELOTA",
    id: 0
}; //ID CERO ES NO ASIGNADO
var productoCuatro = {
    nombreProducto: "BICICLETA",
    precio: 50,
    thumbnail: "http://BICICLETA",
    id: 0
}; //ID CERO ES NO ASIGNADO
var productoCinco = {
    nombreProducto: "PALA",
    precio: 80,
    thumbnail: "http://PALA",
    id: 0
}; //ID CERO ES NO ASIGNADO
var contenedor = new contenedor_js_1.default("TV");
app.get("/productos", function (req, res) {
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var productos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, contenedor.obtenerObjetoEnProductosJson()];
                case 1:
                    productos = _a.sent();
                    res.send(productos);
                    return [2 /*return*/];
            }
        });
    }); } //FIN ASYNC
    )();
}); //FIN DEL GET
app.get("/productoRandom", function (req, res) {
    var randomInt = Math.floor(Math.random() * 5) + 1;
    //res.send(`${randomInt}`);
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var productoRandom;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, contenedor.obtenerObjetoPorId(randomInt)];
                case 1:
                    productoRandom = _a.sent();
                    res.send(productoRandom);
                    console.log(randomInt);
                    return [2 /*return*/];
            }
        });
    }); } //FIN ASYNC
    )();
}); //FIN DEL GET
var server = app.listen(3000, function () {
    console.log("INICIO SERVIDOR: http://localhost:" + server.address().port);
});
