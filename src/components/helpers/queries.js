export const crearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch("http://localhost:3000/Productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productoNuevo),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const listarProductoAPI = async () => {
  try {
    const respuesta = await fetch("http://localhost:3000/Productos");
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};
