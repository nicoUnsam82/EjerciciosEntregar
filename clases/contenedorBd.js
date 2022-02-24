const knex = require("knex");


module.exports = class ContenedorDB {
  constructor(dbOptions, table) {
    this.conex = knex(dbOptions);
    this.table = table;
  }
  async crearTabla() {

    this.conex.schema
      .createTable("productos", (table) => {
        table.increments("id").primary().notNullable();
        table.string("nombreProducto");
        table.float("precio");
        table.string("urlProducto");
      })
      .then((data) => {
        console.log("Creada la tabla productos");
      })
      .catch((err) => {
        console.log(err.sqlMessage);
        console.log(err.sql);
      })
      .finally(() => {
        this.conex.destroy();
      });
  }
  async obtenerDatosBase() {
    return new Promise((res, rej) => {
      this.conex(this.table)
        .then((rows) => {
          res(rows);
        })
        .catch((err) => {
          console.log(err.sqlMessage);
          console.log(err.sql);
        })
        .finally(() => {
          this.conex.destroy();
        });
    });
  }

  async guardar(object) {
    this.conex(this.table)
      .insert(object)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.sqlMessage);
        console.log(err.sql);
      });
  }


}//FIN DE CLASE CONTENEDOR DB

/*const contenedorMysql = new ContenedorDB(
  {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      database: "productos",
    },
    pool: { min: 0, max: 7 },
  },
  "productos"
);

const contenedorSqlite = new ContenedorDB(
  {
    client: "sqlite3",
    connection: { filename: "./mydb.sqlite" },
  },
  "mensajes"
);*/
//  PRUEBA PARA VERIFICAR CONEXION A LA BASE

//const prueba={ nombreProducto: 'TV', precio: '123', urlProducto: 'http://TV' };
//contenedorMysql.guardar(prueba);//PRUEBA DE CONEXION

//contenedorSqlite.getAll().then(console.log);//PRUEBA DE CONEXION
