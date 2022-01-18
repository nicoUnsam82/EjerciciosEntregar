interface Producto {
    nombreProducto: string;
    precio: number;
    thumbnail: string;
    id: number;
   
}

export default class Contenedor {
    productos: Producto[]=[];
    static idGlobal: number = 0;
    static idBorrados: number[] = [];


    constructor() {
        this.productos;

    }//FIN DEL CONSTRUCTOR

    async guardar(objeto: Producto) {

        try {

            let largoArrayObjetos: number = this.productos.length;
            let idMasAlto: number = 0;
            if (largoArrayObjetos > 0) {
                idMasAlto = this.productos.reduce((anterior, proximo) => anterior > proximo.id ? anterior : proximo.id, 0);

            }//FIN DEL IF
            let largoIdBorrados:number =Contenedor.idBorrados.length;
            
            switch(largoIdBorrados){

            case 0:
                this.productos.push(objeto);
                const idAsignar = idMasAlto + 1;
                this.productos[largoArrayObjetos].id = idAsignar;
                console.log(this.productos[idAsignar-1]);
                return this.productos[idAsignar-1];
            default:
                this.productos.push(objeto);
                let idAsignado:number=Contenedor.idBorrados[0]
                this.productos[largoArrayObjetos].id = Contenedor.idBorrados[0];
                Contenedor.idBorrados.shift();
                console.log(this.productos[idAsignado]);
                return this.productos[idAsignado];            

            }
  
        }//FIN DEL TRY
        catch (e) {

            console.error(new Error("ERROR EN GENERACION EN GUARDAR OBJETO"));
            throw (e);



        }//FIN DEL CATCH

        
    }//FIN DE METODO GUARDAR

    async obtenerObjetoPorId(idBusqueda:any) {
        try {
            let id:number =parseInt(idBusqueda);
            console.log(id);
            const largoArrayObajetos: number = this.productos.length;
            if (largoArrayObajetos > id) {
                const producto = this.productos.filter(idBuscado => idBuscado.id == idBusqueda);
                return producto;
            }
            else {

                return { error : 'producto no encontrado' };
            }


        }//FIN DEL TRY
        catch (e) {

            console.error(new Error("ERROR EN OBTENER OBJETO POR ID"));
            throw (e);


        }//FIN DEL CATCH



    }//FIN DEL METODO OBTENER OBJETO POR ID

    async obtenerObjetoEnProductos() {
        try {


            const largoArrayObjetos: number = this.productos.length;
            if (largoArrayObjetos != 0) {

                return this.productos;

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

            const productoBorrado = this.productos.filter(idBuscado => idBuscado.id == idBusqueda);
            const largoProductoBorrado = productoBorrado.length;
            this.productos = this.productos.filter(idBuscado => idBuscado.id != idBusqueda);

            if (largoProductoBorrado != 0) {
                Contenedor.idBorrados.push(idBusqueda);
                return productoBorrado;
            }
            else {

                return { error : 'producto no encontrado' };
            }


        }//FIN DEL TRY
        catch (e) {

            console.error(new Error("ERROR EN BORRAR OBJETO POR ID"));
            throw (e);


        }//FIN DEL CATCH



    }//FIN DEL METODO BORRAR OBJETO POR ID
    async borrarTodosObjetos() {
        try {

            this.productos = [];

        }//FIN DEL TRY
        catch (e) {

            console.error(new Error("ERROR EN BORRAR TODOS LOS OBJETOS"));
            throw (e);


        }//FIN DEL CATCH



    }//FIN DEL METODO BORRAR OBJETO TODOS LOS OBJETOS

    async actualizarObjetoPorId(idBusqueda: number,objeto: Producto) {
        try {

            const largoArrayObajetos: number = this.productos.length;
            if (largoArrayObajetos > idBusqueda) {
                this.productos[idBusqueda-1].nombreProducto=objeto.nombreProducto;
                this.productos[idBusqueda-1].precio=objeto.precio;
                this.productos[idBusqueda-1].thumbnail=objeto.thumbnail;
                return this.productos[idBusqueda-1];
                
            }
            else {

                return { error : 'producto no encontrado' };
            }

        }//FIN DEL TRY
        catch (e) {

            console.error(new Error("ERROR EN ACTUALIZAR OBJETO POR ID"));
            throw (e);


        }//FIN DEL CATCH



    }//FIN DEL METODO ACTUALIZAR OBJETO POR ID


}//FIN DE LA CLASE CONTENEDOR

