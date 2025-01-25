import '../../style/CardProducto.css';

const CardProducto = ({productosItem}) => {
    return (
        <a className='BotonDetalle' href="/DetalleProducto">
            <div className='CardProducto'>
            <div className="CardImg">
            <img src={productosItem.imagen} />
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
        </a>
    );
};

export default CardProducto;