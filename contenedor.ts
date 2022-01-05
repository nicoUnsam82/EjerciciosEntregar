const fs = require('fs');
import Producto from "./entregableClase6";



export default class Contenedor {
    nombreProducto: string;
    static idGlobal: number = 0;
    static idBorrados: number[] = [];
 

    constructor(nombreProducto: string) {
        this.nombreProducto = nombreProducto;

    }//FIN DEL CONSTRUCTOR

    async guardar(objeto: Producto) {


        try {



            if (fs.existsSync('./productos.json')) {
                const informacionProductosTxt: string = await fs.promises.readFile('./productos.json', 'utf-8');
                let informacionProductos: Producto[] = JSON.parse(informacionProductosTxt);
                let largoArrayObjetos: number = informacionProductos.length;
                let idMasAlto: number = 0;
                if (largoArrayObjetos > 0) {
                    idMasAlto = informacionProductos.reduce((anterior, proximo) => anterior > proximo.id ? anterior : proximo.id, 0);

                }//FIN DEL IF
                
                if (Contenedor.idBorrados.length == 0) {
                    informacionProductos.push(objeto);
                    const idAsignar=idMasAlto + 1;
                    informacionProductos[largoArrayObjetos].id = idAsignar;
                    const objetoString: string = JSON.stringify(informacionProductos);
                    await fs.promises.writeFile('./productos.json', objetoString, 'utf-8')
                
                }
                if (Contenedor.idBorrados.length != 0) {
                    informacionProductos.push(objeto);
                    informacionProductos[largoArrayObjetos].id = Contenedor.idBorrados[0];
                    Contenedor.idBorrados.shift();
                    const objetoString: string = JSON.stringify(informacionProductos);
                    await fs.promises.writeFile('./productos.json', objetoString, 'utf-8')
                
                }


            }//FIN DEL IF if (fs.existsSync('./productos.json'))

            else {

                let informacionProducto: Producto[] = [];
                informacionProducto.push(objeto);
                Contenedor.idGlobal = 1;
                informacionProducto[0].id = Contenedor.idGlobal;
                const objetoStringPrimero: string = JSON.stringify(informacionProducto);
                await fs.promises.writeFile('./productos.json', objetoStringPrimero, 'utf-8');

            }

            console.log(Contenedor.idGlobal);


        }//FIN DEL TRY
        catch (e) {

            console.error(new Error("ERROR EN GENERACION EN GUARDAR OBJETO"));
            throw (e);



        }//FIN DEL CATCH


    }//FIN DE METODO GUARDAR

    async obtenerObjetoPorId(idBusqueda: number) {
        try {

            const informacionProductosTxt: string = await fs.promises.readFile('./productos.json', 'utf-8');
            const informacionProductos: Producto[] = JSON.parse(informacionProductosTxt);
            const largoArrayObajetos: number = informacionProductos.length;
            if (largoArrayObajetos > idBusqueda) {
                const producto = informacionProductos[idBusqueda];
                return producto;
            }
            else {

                return null;
            }


        }//FIN DEL TRY
        catch (e) {

            console.error(new Error("ERROR EN OBTENER OBJETO POR ID"));
            throw (e);


        }//FIN DEL CATCH



    }//FIN DEL METODO OBTENER OBJETO POR ID

    async obtenerObjetoEnProductosJson() {
        try {

            const informacionProductosTxt: string = await fs.promises.readFile('./productos.json', 'utf-8');
            const informacionProductos: Producto[] = JSON.parse(informacionProductosTxt);
            const largoArrayObjetos: number = informacionProductos.length;
            if (largoArrayObjetos != 0) {

                return informacionProductos;

            }
            else {

                return null;
            }


        }//FIN DEL TRY
        catch (e) {

            console.error(new Error("ERROR EN OBTENER TODOS LOS OBJETOS"));
            throw (e);


        }//FIN DEL CATCH



    }//FIN DEL METODO OBTENER TODOS LOS OBJETOS  
    async borrarObjetoPorId(idBusqueda: number) {
        try {

            const informacionProductosTxt: string = await fs.promises.readFile('./productos.json', 'utf-8');
            const informacionProductos: Producto[] = JSON.parse(informacionProductosTxt);
            const productoBorrado = informacionProductos.filter(idBuscado => idBuscado.id == idBusqueda);
            const largoProductoBorrado = productoBorrado.length;
            const nuevaInformacionProductos = informacionProductos.filter(idBuscado => idBuscado.id != idBusqueda);

            if (largoProductoBorrado != 0) {
                Contenedor.idBorrados.push(idBusqueda);
                const objetoString: string = JSON.stringify(nuevaInformacionProductos);
                await fs.promises.writeFile('./productos.json', objetoString, 'utf-8');
                return nuevaInformacionProductos;
            }
            else {

                return null;
            }


        }//FIN DEL TRY
        catch (e) {

            console.error(new Error("ERROR EN BORRAR OBJETO POR ID"));
            throw (e);


        }//FIN DEL CATCH



    }//FIN DEL METODO BORRAR OBJETO POR ID
    async borrarTodosObjetos() {
        try {

            const informacionProductos: Producto[] = [];
            const objetoString: string = JSON.stringify(informacionProductos);
            await fs.promises.writeFile('./productos.json', objetoString, 'utf-8');


        }//FIN DEL TRY
        catch (e) {

            console.error(new Error("ERROR EN BORRAR TODOS LOS OBJETOS"));
            throw (e);


        }//FIN DEL CATCH



    }//FIN DEL METODO BORRAR OBJETO TODOS LOS OBJETOS


}//FIN DE LA CLASE CONTENEDOR

