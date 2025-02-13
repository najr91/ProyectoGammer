export const crearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch("http://localhost:3001/Productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productoNuevo),
    });
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    return { status: respuesta.status, datos };
  } catch (error) {
    console.error("Error en crearProductoAPI:", error);
    return { status: 500, error: error.message };
  }
};

export const listarProductoAPI = async () => {
  try {
    const respuesta = await fetch("http://localhost:3001/Productos");
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    return { status: respuesta.status, datos };
  } catch (error) {
    console.error("Error en listarProductoAPI:", error);
    return { status: 500, error: error.message };
  }
};

export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch("http://localhost:3001/Productos/" + id, {
      method: "DELETE",
    });

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    return { status: respuesta.status, success: true };
  } catch (error) {
    console.error("Error en borrarProductoAPI:", error);
    return { status: 500, error: error.message, success: false };
  }
};

export const getProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`http://localhost:3001/Productos/${id}`);
    return respuesta;
  } catch (error) {
    console.error("Error en getProductoAPI:", error);
  }
};

export const editarProductoAPI = async (producto, id) => {
  try {
    const respuesta = await fetch("http://localhost:3001/Productos/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    return { status: respuesta.status, datos };
  } catch (error) {
    console.error("Error en editarProductoAPI:", error);
    return { status: 500, error: error.message };
  }
};

const userAdmin ={
  email:'administrador@123.com',
  password:'123456789'
} 

export const login = (usuario)=>{
  if(usuario.email === userAdmin.email && usuario.password === userAdmin.password){
    sessionStorage.setItem('userKey', JSON.stringify(userAdmin.email))
    return true
  }else{
    return false
  }
}