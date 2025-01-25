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
    console.log("Intentando borrar producto con ID:", id);
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
