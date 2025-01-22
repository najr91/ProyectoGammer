import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProductoAPI } from "../helpers/queries";
import { useNavigate } from "react-router";

const FormularioProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = async (producto) => {
    const respuesta = await crearProductoAPI(producto);
    console.log(respuesta);
    if (respuesta.status === 201) {
      alert("el producto se creo con exito");
      reset();
      //redirigirlo a la pag de administrador
      navegacion("/administrador");
    } else {
      alert("Ocurrió un error al crear el producto");
    }
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Administrar Juego</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreJuego">
          <Form.Label>Juego*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej:Minecraft"
            {...register("nombreJuego", {
              required: "El nombre del producto es un dato obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres inclusive",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreJuego?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 5000"
            {...register("precio", {
              required: "El precio es un valor obligatorio",
              min: {
                value: 5000,
                message: "El precio minimo debe ser de $5000 en adelante",
              },
              max: {
                value: 200000,
                message: "El precio maximo debe ser $20000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La url de la imagen debe ser obligatoria",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message:
                  "Debe ingresar una url de imagen valida, los formatos admitidos son (jpg|jpeg|gif|png) ",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoría del Juego*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Accion">Accion</option>
            <option value="Aventura">Aventura</option>
            <option value="Deporte">Deporte</option>
            <option value="RGP">RGP</option>
            <option value="Simulacion">Simulacion</option>
            <option value="Terror">Terror</option>
            <option value="FPS">FPS</option>
            <option value="Lucha">Lucha</option>
            <option value="Carreras">Carreras</option>
            <option value="MOBA">MOBA</option>
            <option value="Casual">Casual</option>
            <option value="Indie">Indie</option>
            <option value="Sandbox">Sandbox</option>
            <option value="VR">VR</option>
            <option value="Survival">Survival</option>
            <option value="Multijugador">Multijugador</option>
            <option value="Battle  Royale">Battle Royale</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripcion breve."
            as="textarea"
            {...register("descripcion_breve", {
              required: "La descripcion breve es ogligatoria",
              minLength: {
                value: 5,
                message:
                  "Debe ingresar como minimo una descripcion de 5 caracteres",
              },
              maxLength: {
                value: 50,
                message:
                  "Debe ingresar como maximo una descripcion de 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcionAmplia">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripción detallada del producto, características y ventajas "
            as="textarea"
            {...register("descripcion_amplia", {
              required: "La descripcion amplia es ogligatoria",
              minLength: {
                value: 10,
                message:
                  "Debe ingresar como minimo una descripcion de 10 caracteres",
              },
              maxLength: {
                value: 250,
                message:
                  "Debe ingresar como maximo una descripcion de 250 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_amplia?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDesarrollador">
          <Form.Label>Desarrollador*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre del desarrollador.."
            {...register("desarrollador", {
              required: "El campo es un dato obligatorio",
              minLength: {
                value: 5,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres inclusive",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formJuegoSemanal">
          <Form.Label>Juego semanal?*</Form.Label>
          <Form.Select
            {...register("JuegoSemanal", {
              required: "Debe seleccionar una opción",
            })}
          >
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.juegoSemanal?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTipoConsola">
          <Form.Label>Tipo de Consola*</Form.Label>
          <Form.Select
            {...register("TipoConsola", {
              required: "Debe seleccionar una opción",
            })}
          >
            <option value="">-- Selecciona una consola --</option>
            <optgroup label="PlayStation">
              <option value="ps5">PlayStation 5</option>
              <option value="ps4">PlayStation 4</option>
              <option value="ps3">PlayStation 3</option>
              <option value="ps2">PlayStation 2</option>
              <option value="ps1">PlayStation 1</option>
            </optgroup>
            <optgroup label="Xbox">
              <option value="xbox-series-x">Xbox Series X</option>
              <option value="xbox-series-s">Xbox Series S</option>
              <option value="xbox-one">Xbox One</option>
              <option value="xbox-360">Xbox 360</option>
              <option value="xbox-classic">Xbox Classic</option>
            </optgroup>
            <optgroup label="Nintendo">
              <option value="switch">Nintendo Switch</option>
              <option value="switch-oled">Nintendo Switch OLED</option>
              <option value="switch-lite">Nintendo Switch Lite</option>
              <option value="wii">Nintendo Wii</option>
              <option value="wii-u">Nintendo Wii U</option>
              <option value="gamecube">Nintendo GameCube</option>
              <option value="n64">Nintendo 64</option>
              <option value="snes">Super Nintendo (SNES)</option>
              <option value="nes">Nintendo Entertainment System (NES)</option>
            </optgroup>
            <optgroup label="Portátiles">
              <option value="psp">PlayStation Portable (PSP)</option>
              <option value="ps-vita">PlayStation Vita</option>
              <option value="nintendo-ds">Nintendo DS</option>
              <option value="nintendo-3ds">Nintendo 3DS</option>
              <option value="gba">Game Boy Advance</option>
              <option value="gbc">Game Boy Color</option>
              <option value="gb">Game Boy</option>
            </optgroup>
            <optgroup label="Retro">
              <option value="sega-genesis">SEGA Genesis</option>
              <option value="sega-saturn">SEGA Saturn</option>
              <option value="sega-dreamcast">SEGA Dreamcast</option>
              <option value="atari-2600">Atari 2600</option>
              <option value="neo-geo">Neo Geo</option>
              <option value="commodore-64">Commodore 64</option>
            </optgroup>
            <optgroup label="PC">
              <option value="windows">Windows</option>
              <option value="mac">Mac</option>
              <option value="linux">Linux</option>
            </optgroup>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.TipoConsolal?.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;
