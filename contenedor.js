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
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var Contenedor = /** @class */ (function () {
    function Contenedor(nombreProducto) {
        this.nombreProducto = nombreProducto;
    } //FIN DEL CONSTRUCTOR
    Contenedor.prototype.guardar = function (objeto) {
        return __awaiter(this, void 0, void 0, function () {
            var informacionProductosTxt, informacionProductos, largoArrayObjetos, idMasAlto, idAsignar, objetoString, objetoString, informacionProducto, objetoStringPrimero, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        if (!fs.existsSync('./productos.json')) return [3 /*break*/, 6];
                        return [4 /*yield*/, fs.promises.readFile('./productos.json', 'utf-8')];
                    case 1:
                        informacionProductosTxt = _a.sent();
                        informacionProductos = JSON.parse(informacionProductosTxt);
                        largoArrayObjetos = informacionProductos.length;
                        idMasAlto = 0;
                        if (largoArrayObjetos > 0) {
                            idMasAlto = informacionProductos.reduce(function (anterior, proximo) { return anterior > proximo.id ? anterior : proximo.id; }, 0);
                        } //FIN DEL IF
                        if (!(Contenedor.idBorrados.length == 0)) return [3 /*break*/, 3];
                        informacionProductos.push(objeto);
                        idAsignar = idMasAlto + 1;
                        informacionProductos[largoArrayObjetos].id = idAsignar;
                        objetoString = JSON.stringify(informacionProductos);
                        return [4 /*yield*/, fs.promises.writeFile('./productos.json', objetoString, 'utf-8')];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(Contenedor.idBorrados.length != 0)) return [3 /*break*/, 5];
                        informacionProductos.push(objeto);
                        informacionProductos[largoArrayObjetos].id = Contenedor.idBorrados[0];
                        Contenedor.idBorrados.shift();
                        objetoString = JSON.stringify(informacionProductos);
                        return [4 /*yield*/, fs.promises.writeFile('./productos.json', objetoString, 'utf-8')];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        informacionProducto = [];
                        informacionProducto.push(objeto);
                        Contenedor.idGlobal = 1;
                        informacionProducto[0].id = Contenedor.idGlobal;
                        objetoStringPrimero = JSON.stringify(informacionProducto);
                        return [4 /*yield*/, fs.promises.writeFile('./productos.json', objetoStringPrimero, 'utf-8')];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        console.log(Contenedor.idGlobal);
                        return [3 /*break*/, 10];
                    case 9:
                        e_1 = _a.sent();
                        console.error(new Error("ERROR EN GENERACION EN GUARDAR OBJETO"));
                        throw (e_1);
                    case 10: return [2 /*return*/];
                }
            });
        });
    }; //FIN DE METODO GUARDAR
    Contenedor.prototype.obtenerObjetoPorId = function (idBusqueda) {
        return __awaiter(this, void 0, void 0, function () {
            var informacionProductosTxt, informacionProductos, largoArrayObajetos, producto, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs.promises.readFile('./productos.json', 'utf-8')];
                    case 1:
                        informacionProductosTxt = _a.sent();
                        informacionProductos = JSON.parse(informacionProductosTxt);
                        largoArrayObajetos = informacionProductos.length;
                        if (largoArrayObajetos > idBusqueda) {
                            producto = informacionProductos[idBusqueda];
                            return [2 /*return*/, producto];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.error(new Error("ERROR EN OBTENER OBJETO POR ID"));
                        throw (e_2);
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //FIN DEL METODO OBTENER OBJETO POR ID
    Contenedor.prototype.obtenerObjetoEnProductosJson = function () {
        return __awaiter(this, void 0, void 0, function () {
            var informacionProductosTxt, informacionProductos, largoArrayObjetos, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs.promises.readFile('./productos.json', 'utf-8')];
                    case 1:
                        informacionProductosTxt = _a.sent();
                        informacionProductos = JSON.parse(informacionProductosTxt);
                        largoArrayObjetos = informacionProductos.length;
                        if (largoArrayObjetos != 0) {
                            return [2 /*return*/, informacionProductos];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        console.error(new Error("ERROR EN OBTENER TODOS LOS OBJETOS"));
                        throw (e_3);
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //FIN DEL METODO OBTENER TODOS LOS OBJETOS  
    Contenedor.prototype.borrarObjetoPorId = function (idBusqueda) {
        return __awaiter(this, void 0, void 0, function () {
            var informacionProductosTxt, informacionProductos, productoBorrado, largoProductoBorrado, nuevaInformacionProductos, objetoString, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fs.promises.readFile('./productos.json', 'utf-8')];
                    case 1:
                        informacionProductosTxt = _a.sent();
                        informacionProductos = JSON.parse(informacionProductosTxt);
                        productoBorrado = informacionProductos.filter(function (idBuscado) { return idBuscado.id == idBusqueda; });
                        largoProductoBorrado = productoBorrado.length;
                        nuevaInformacionProductos = informacionProductos.filter(function (idBuscado) { return idBuscado.id != idBusqueda; });
                        if (!(largoProductoBorrado != 0)) return [3 /*break*/, 3];
                        Contenedor.idBorrados.push(idBusqueda);
                        objetoString = JSON.stringify(nuevaInformacionProductos);
                        return [4 /*yield*/, fs.promises.writeFile('./productos.json', objetoString, 'utf-8')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, nuevaInformacionProductos];
                    case 3: return [2 /*return*/, null];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_4 = _a.sent();
                        console.error(new Error("ERROR EN BORRAR OBJETO POR ID"));
                        throw (e_4);
                    case 6: return [2 /*return*/];
                }
            });
        });
    }; //FIN DEL METODO BORRAR OBJETO POR ID
    Contenedor.prototype.borrarTodosObjetos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var informacionProductos, objetoString, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        informacionProductos = [];
                        objetoString = JSON.stringify(informacionProductos);
                        return [4 /*yield*/, fs.promises.writeFile('./productos.json', objetoString, 'utf-8')];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        console.error(new Error("ERROR EN BORRAR TODOS LOS OBJETOS"));
                        throw (e_5);
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //FIN DEL METODO BORRAR OBJETO TODOS LOS OBJETOS
    Contenedor.idGlobal = 0;
    Contenedor.idBorrados = [];
    return Contenedor;
}()); //FIN DE LA CLASE CONTENEDOR
exports.default = Contenedor;
