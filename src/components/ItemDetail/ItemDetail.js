import './ItemDetail.css'

const ItemDetail = ({productSelected}) => {
    return (
    <div className="cardDetail">
        <h1 className="cardInfo">#{productSelected.id}</h1>
        <h2 className="cardInfo">{productSelected.title}</h2>
        <h3 className="cardInfo">{productSelected.category}</h3>
        <h3 className="cardInfo">${productSelected.price}</h3>
        <p className="cardInfo">{productSelected.description}</p>
        <button className="cardInfoButton">Agregar al carrito</button>
    </div>
    );
};

export default ItemDetail