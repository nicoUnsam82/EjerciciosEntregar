//USO DE LIBRERIA PARA CLIENTE EN TYPESCRIPT DE IO SOCKET (ADEMAS INSTALAR npm install socket.io-client)
import { io, Socket } from "socket.io-client";
interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }
  
  interface ClientToServerEvents {
    hello: () => void;
  }
  
  // please note that the types are reversed
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
 //FIN DE USO DE //USO DE LIBRERIA PARA CLIENTE EN TYPESCRIPT DE IO SOCKET (ADEMAS INSTALAR npm install socket.io-client)

 let agregarProducto:HTMLElement|null= document.getElementById("#productoAgregar");

 if(agregarProducto){
 agregarProducto.addEventListener("submit",(e)=>{
    e.preventDefault();
 });

}
