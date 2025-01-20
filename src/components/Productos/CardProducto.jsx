import '../../style/CardProducto.css';

const CardProducto = () => {
    return (
        <div className='CardProducto'>
            <div className="CardImg">
            <img src="https://assetsio.gnwcdn.com/final-fantasy-14-online-dawntrail.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" />
            </div>
            <div className="BodyCard container mt-4">
            <div className="consola my-3">
                    <span>PS5</span>
                    <span>XB1</span>
                    <span>PC</span>
                </div>
                <h5>Final Fantasy</h5>
                <p>$522</p>
            </div>
        </div>
    );
};

export default CardProducto;