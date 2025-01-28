import '../../style/Login.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import Swal from "sweetalert2";
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
      Swal.fire({
        title: "El usuario o la contraseña son incorrecta, intentalo de nuevo.!",
        text: "continuar",
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };

  return (
    <section className=" mt-5 container-login mainSeccion">
    <article className="mx-auto   loginContainer  text rounded">
      <div className="container mt-5">
            <div className="mt-5">
              <div className="text-center">
                <p className="fs-2 fw-bold">Iniciar sesion</p>
              </div>
              <form onSubmit={handleSubmit(despuesForm)} className="text-white">
                <Form.Group className="mb-3 w-75 mx-auto" controlId="Email">
                  <Form.Label className=" text-white">Email</Form.Label>
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
                    className="form-control-lg  input-login"
                  />
                  <Form.Text className="text-danger">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 w-75 mx-auto" controlId="pasword">
                  <Form.Label className="text-white">Contraseña</Form.Label>
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
                    className="form-control-lg input-login"
                  />
                  <Form.Text className="text-danger">
                    {errors.password?.message}
                  </Form.Text>
                </Form.Group>
                <div className="d-flex justify-content-center my-4">
                  <button  className="btn-login" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
      </div>
    </article>
  </section>
  );
};

export default Login;
