import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { cartContext } from '../../context/CartProvider';
import './ItemDetail.css'

const ItemDetail = ({ productSelected }) => {
    const [count, setCount] = useState(1);
	const { cart, addToCart, clearCart } = useContext(cartContext);
    console.log(cart);

    return (
        <div className="cardDetail">
        <h1 className="cardInfo cartQuantity">Cantidad de productos en tu carrito: {cart.length}</h1>
        <h2 className="cardInfo cartId">Identificador de orden:#{productSelected.id}</h2>
        <h2 className="cardInfo cartTitle">{productSelected.title}</h2>
        <img
        alt={productSelected.title}
        src={`/images/${productSelected.imageId}`}
        className="cartImg"
        />
        <h3 className="cardInfo cartCategory">{productSelected.categoryId}</h3>
        <h3 className="cardInfo cartPrice">${productSelected.price}</h3>
        <p className="cardInfo cartText">{productSelected.description}</p>
        <button onClick={() => addToCart(productSelected, count)} className="cartAddButton">Agregar al carrito</button>
        <button onClick={() => clearCart(productSelected, count)} className="cartClearButton">Vaciar carrito</button>
        <ItemCount setCount={setCount} count={count} />
        <Link to="/cart" className="buyButton">Finalizar compra</Link>
    </div>
    );
};

export default ItemDetail;