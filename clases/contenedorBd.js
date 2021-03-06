const knex = require("knex");

module.exports = class ContenedorBd {
  constructor(dbOptions) {
    this.conex = knex(dbOptions);
  }
  async isExistTable(nombreTabla) {
    return this.conex.schema.hasTable(nombreTabla);
  }

  async crearTablaProductos(nombreTabla) {
    return this.conex.schema.createTable(`${nombreTabla}`, (table) => {
      table.increments("id").primary().notNullable();
      table.string("nombreProducto", 15).notNullable();
      table.float("precio");
      table.string("urlProducto", 15).notNullable();
    })
      .then((data) => {
        console.log(`Creada la tabla ${nombreTabla}`);
      })
      .catch((err) => {
        console.log(err.sqlMessage);
        console.log(err.sql);
      });
  }
  async crearTablaMsj() {

    this.conex.schema
      .createTable("mensajesTabla", (table) => {
        table.string("fyh");
        table.string("idNombre");
        table.string("mensajeContenido");
      })
      .then((data) => {
        console.log("Creada la tabla mensajes");
      })
      .catch((err) => {
        console.log(err.sqlMessage);
        console.log(err.sql);
      });
  }

  async insertarProductos(nombreTabla, objeto) {
    return this.conex(`${nombreTabla}`).insert(objeto);
  }
  async insertarMsj(objeto) {
    return this.conex("mensajes").insert(objeto);
  }
  async obtenerProductos(nombreTabla) {
    return this.conex(`${nombreTabla}`);
  }
  async obtenerMsj() {
    return this.conex("mensajes");
  }
  async actualizarProductoPorId(nombreTabla, valorActualizar, valor, id) {
    return this.conex(`${nombreTabla}`).where("id", id).update(`${valorActualizar}`, valor);
  }
  async desconectar() {
    this.conex.destroy();
  }
  async conectar(dbOptions) {

    this.conex = knex(dbOptions);

  }

}//FIN DE CLASE CONTENEDOR BD


