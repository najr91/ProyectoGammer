import "../../style/Inicio.css";
import SliderPortada from "../Slider/SliderPortada";

const Inicio = () => {
  return (
    <div>
      <section>
        <article>
          <div className="PortadaInicio">
            <div className="ContainerInicio container">
              <div>
              <h1 className="display-2">The ultimate game spering platform</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                vitae corrupti voluptatum perferendis accusamus quod officiis
                illum laboriosam quo incidunt?
              </p>
              <button className="button-portada">Learn More</button>
              </div>
            </div>
          </div>
        </article>
        <article>
            <SliderPortada></SliderPortada>
        </article>
      </section>
    </div>
  );
};

export default Inicio;
