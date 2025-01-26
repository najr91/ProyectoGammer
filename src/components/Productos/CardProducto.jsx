import { Link } from 'react-router-dom';  
import '../../style/CardProducto.css';  

const CardProducto = ({ productosItem }) => {
    return (
        <a href={"/DetalleProducto/"+ productosItem.id} className="BotonDetalle">
            <div className="CardProducto">
                <div className="CardImg">
                    <img src={productosItem.imagen} alt={productosItem.nombreJuego} />
                </div>
                <div className="BodyCard container mt-4">
                    <div className="consola my-3">
                        <b>PS5</b>
                        <b>XB1</b>
                        <b>PC</b>
                    </div>
                    <h5>{productosItem.nombreJuego}</h5>
                    <p>${productosItem.precio}</p>
                </div>
            </div>
        </a>
    );
};

export default CardProducto;
