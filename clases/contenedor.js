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
var Contenedor = /** @class */ (function () {
    function Contenedor() {
        this.productos = [];
        this.productos;
    } //FIN DEL CONSTRUCTOR
    Contenedor.prototype.guardar = function (objeto) {
        return __awaiter(this, void 0, void 0, function () {
            var largoArrayObjetos, idMasAlto, largoIdBorrados, idAsignar, idAsignado;
            return __generator(this, function (_a) {
                try {
                    largoArrayObjetos = this.productos.length;
                    idMasAlto = 0;
                    if (largoArrayObjetos > 0) {
                        idMasAlto = this.productos.reduce(function (anterior, proximo) { return anterior > proximo.id ? anterior : proximo.id; }, 0);
                    } //FIN DEL IF
                    largoIdBorrados = Contenedor.idBorrados.length;
                    console.log(largoIdBorrados);
                    switch (largoIdBorrados) {
                        case 0:
                            this.productos.push(objeto);
                            idAsignar = idMasAlto + 1;
                            this.productos[largoArrayObjetos].id = idAsignar;
                            console.log(this.productos[idAsignar - 1]);
                            return [2 /*return*/, this.productos[idAsignar - 1]];
                        default:
                            this.productos.push(objeto);
                            idAsignado = Contenedor.idBorrados[0];
                            this.productos[largoArrayObjetos].id = idAsignado;
                            Contenedor.idBorrados.shift();
                            console.log(this.productos[largoArrayObjetos]);
                            return [2 /*return*/, this.productos[largoArrayObjetos]];
                    }
                } //FIN DEL TRY
                catch (e) {
                    console.error(new Error("ERROR EN GENERACION EN GUARDAR OBJETO"));
                    throw (e);
                } //FIN DEL CATCH
                return [2 /*return*/];
            });
        });
    }; //FIN DE METODO GUARDAR
    Contenedor.prototype.obtenerObjetoPorId = function (idBusqueda) {
        return __awaiter(this, void 0, void 0, function () {
            var id, largoArrayObajetos, producto;
            return __generator(this, function (_a) {
                try {
                    id = parseInt(idBusqueda);
                    console.log(id);
                    largoArrayObajetos = this.productos.length;
                    if (largoArrayObajetos > id) {
                        producto = this.productos.filter(function (idBuscado) { return idBuscado.id == idBusqueda; });
                        return [2 /*return*/, producto];
                    }
                    else {
                        return [2 /*return*/, { error: 'producto no encontrado' }];
                    }
                } //FIN DEL TRY
                catch (e) {
                    console.error(new Error("ERROR EN OBTENER OBJETO POR ID"));
                    throw (e);
                } //FIN DEL CATCH
                return [2 /*return*/];
            });
        });
    }; //FIN DEL METODO OBTENER OBJETO POR ID
    Contenedor.prototype.obtenerObjetoEnProductos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var largoArrayObjetos;
            return __generator(this, function (_a) {
                try {
                    largoArrayObjetos = this.productos.length;
                    if (largoArrayObjetos != 0) {
                        return [2 /*return*/, this.productos];
                    }
                    else {
                        return [2 /*return*/, null];
                    }
                } //FIN DEL TRY
                catch (e) {
                    console.error(new Error("ERROR EN OBTENER TODOS LOS OBJETOS"));
                    throw (e);
                } //FIN DEL CATCH
                return [2 /*return*/];
            });
        });
    }; //FIN DEL METODO OBTENER TODOS LOS OBJETOS  
    Contenedor.prototype.borrarObjetoPorId = function (idBusqueda) {
        return __awaiter(this, void 0, void 0, function () {
            var productoBorrado, largoProductoBorrado;
            return __generator(this, function (_a) {
                try {
                    productoBorrado = this.productos.filter(function (idBuscado) { return idBuscado.id == idBusqueda; });
                    largoProductoBorrado = productoBorrado.length;
                    this.productos = this.productos.filter(function (idBuscado) { return idBuscado.id != idBusqueda; });
                    if (largoProductoBorrado != 0) {
                        Contenedor.idBorrados.push(idBusqueda);
                        return [2 /*return*/, productoBorrado];
                    }
                    else {
                        return [2 /*return*/, { error: 'producto no encontrado' }];
                    }
                } //FIN DEL TRY
                catch (e) {
                    console.error(new Error("ERROR EN BORRAR OBJETO POR ID"));
                    throw (e);
                } //FIN DEL CATCH
                return [2 /*return*/];
            });
        });
    }; //FIN DEL METODO BORRAR OBJETO POR ID
    Contenedor.prototype.borrarTodosObjetos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.productos = [];
                } //FIN DEL TRY
                catch (e) {
                    console.error(new Error("ERROR EN BORRAR TODOS LOS OBJETOS"));
                    throw (e);
                } //FIN DEL CATCH
                return [2 /*return*/];
            });
        });
    }; //FIN DEL METODO BORRAR OBJETO TODOS LOS OBJETOS
    Contenedor.prototype.actualizarObjetoPorId = function (idBusqueda, objeto) {
        return __awaiter(this, void 0, void 0, function () {
            var largoArrayObajetos;
            return __generator(this, function (_a) {
                try {
                    largoArrayObajetos = this.productos.length;
                    if (largoArrayObajetos > idBusqueda) {
                        this.productos[idBusqueda - 1].nombreProducto = objeto.nombreProducto;
                        this.productos[idBusqueda - 1].precio = objeto.precio;
                        this.productos[idBusqueda - 1].thumbnail = objeto.thumbnail;
                        return [2 /*return*/, this.productos[idBusqueda - 1]];
                    }
                    else {
                        return [2 /*return*/, { error: 'producto no encontrado' }];
                    }
                } //FIN DEL TRY
                catch (e) {
                    console.error(new Error("ERROR EN ACTUALIZAR OBJETO POR ID"));
                    throw (e);
                } //FIN DEL CATCH
                return [2 /*return*/];
            });
        });
    }; //FIN DEL METODO ACTUALIZAR OBJETO POR ID
    Contenedor.idGlobal = 0;
    Contenedor.idBorrados = [];
    return Contenedor;
}()); //FIN DE LA CLASE CONTENEDOR
exports.default = Contenedor;
