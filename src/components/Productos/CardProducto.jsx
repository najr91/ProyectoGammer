import { Link } from 'react-router-dom';  
import '../../style/CardProducto.css';  

const CardProducto = ({ productosItem }) => {
    return (
        <Link to={"/DetalleProducto/"+ productosItem.id} className="BotonDetalle">
            <div className="CardProducto">
                <div className="CardImg">
                    <img src={productosItem.imagen} alt={productosItem.nombreJuego} />
                </div>
                <div className="BodyCard container mt-4">
                    <div className="consola my-3">
                        <span>PS5</span>
                        <span>XB1</span>
                        <span>PC</span>
                    </div>
                    <h5>{productosItem.nombreJuego}</h5>
                    <p>${productosItem.precio}</p>
                </div>
            </div>
        </Link>
    );
};

export default CardProducto;
