import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { login } from "../helpers/queries";

const Login = ({ setusuarioLogeado }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
  const navegacion = useNavigate();

  const despuesForm = (usuario) => {
    console.log(usuario);
    if (login(usuario)) {
      setusuarioLogeado(usuario.email);
      Swal.fire({
        title: "El usuario se registro con exito!",
        icon: "success",
        draggable: false,
      });
      navegacion("/administrador"); 
      reset();
    } else {
      alert("El usuario no existe");
    }
  };

  return (
    <section className="container mt-5">
      <article className="mx-auto border mt-5 bg-white text rounded">
        <p className="text-center mt-3">Login</p>
        <form onSubmit={handleSubmit(despuesForm)}>
          <Form.Group className="mb-3 w-75 mx-auto" controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              {...register("email", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "El mínimo de caracteres es de 3",
                },
                maxLength: {
                  value: 50,
                  message: "El máximo de caracteres permitido es de 50",
                },
              })}
              type="email"
              placeholder="ej: JoaquinSa@gmail.com"
              className="form-control-lg"
            />
             <Form.Text className="text-danger">
            {errors.email?.message}
          </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 w-75 mx-auto" controlId="pasword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              {...register("password", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "El mínimo de caracteres es de 3",
                },
                maxLength: {
                  value: 50,
                  message: "El máximo de caracteres permitido es de 50",
                },
              })}
              type="password"
              placeholder="Ingresa su contraseña"
              className="form-control-lg"
            />
            <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
          </Form.Group>

          <div className="d-flex justify-content-center mt-3">
            <Button variant="primary mb-4" type="submit">
              Enviar
            </Button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Login;
