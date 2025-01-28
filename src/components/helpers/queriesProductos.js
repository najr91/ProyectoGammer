// asignar url del servidor
const urlProductos = 'http://localhost:3001/Productos'
// peticion get
export const getProductos = async ()=> {
     try {
        const Productos = await fetch(urlProductos)
        const dato = await Productos.json() 
        return dato 
     } catch (error) {
        console.log(error)
     }    
}

export const obtenerJuegos = async (id) => {
   try {
     const respuesta = await fetch("http://localhost:3001/Productos/" + id);
     return respuesta;
   } catch (error) {
     console.error(error);
     return false;
   }
 };