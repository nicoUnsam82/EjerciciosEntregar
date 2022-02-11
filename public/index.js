
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
          thumbnail:document.querySelector("#urlProducto").value 
        })

      })
     
       });

       socket.on("actualizacion_productos",async (data)=>{
        const fetchTemplateHbs = await fetch("/views/listaProductos.hbs")
        const templateHbs=fetchTemplateHbs.text();
        const template = Handlebars.compile(templateHbs);
        const html = template({productos:data});
        document.querySelector("#hbsTablaProductos").innerHTML =html;
       });
  

 


