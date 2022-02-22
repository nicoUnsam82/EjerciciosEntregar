
const socket = io();
 //FIN DE USO DE //USO DE LIBRERIA PARA CLIENTE EN TYPESCRIPT DE IO SOCKET (ADEMAS INSTALAR npm install socket.io-client)

 document.querySelector("#productoAgregar").addEventListener("submit",async (e)=>{
      e.preventDefault();
      await fetch("api/productos",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json' 
        },
        body:JSON.stringify({
          nombreProducto:document.querySelector("#nombreProducto").value ,
          precio: document.querySelector("#precioProducto").value ,
          urlProducto:document.querySelector("#urlProducto").value 
        })
            
      })

       });

       socket.on("actualizacion_productos",async(data)=>{
       mostrarProductos(data);
       });
  
async function mostrarProductos(data){

  const fetchTemplateHbs = await fetch("./views/partials/listaProductos.hbs");
  const templateHbs=await fetchTemplateHbs.text();
  const template = Handlebars.compile(templateHbs);
  const html = template({productos:data});
  document.querySelector("#hbsTablaProductos").innerHTML =html;

}
 
//MENSAJES

document.querySelector("#mensajeAgregar").addEventListener("submit",async (e)=>{
  e.preventDefault();
const idNombre = document.querySelector("#idNombre").value;
const mensajeContenido= document.querySelector("#mensajeContenido").value;
const mensaje = {idNombre : idNombre, mensajeContenido:mensajeContenido};
socket.emit('nuevoMensaje', mensaje);
//const html = generarHtmlMensaje(mensaje)
//document.querySelector("#mensajesChat").innerHTML = html;

});

socket.on('mensajes', mensajes => {
  const html = generarHtmlLista(mensajes)
  document.querySelector("#mensajesChat").innerHTML = html;
  });


function generarHtmlMensaje(mensaje) {
    return (`
          <div>
              <b style="color:blue;">${mensaje.idNombre}</b>
              <i style="color:green;">${mensaje.mensajeContenido}</i>
          </div>
      `)

}
function generarHtmlLista(mensajes) {
  return mensajes.map(mensaje => {
      return (`
          <div>
              <b style="color:blue;">${mensaje.idNombre}</b>
              [<span style="color:brown;">${mensaje.fyh}</span>] :
              <i style="color:green;">${mensaje.mensajeContenido}</i>
          </div>
      `)
  }).join(" ");
}


