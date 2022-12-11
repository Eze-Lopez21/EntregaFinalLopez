import { useContext } from 'react';
import { cartContext } from '../../context/CartProvider';

const CartWidget = () => {
    const { totalProducts } = useContext(cartContext);
    return (
        <>
            <i className="bi bi-cart2"></i>
            <span>{totalProducts() || ""}</span>
        </>
    );
};

export default CartWidget;