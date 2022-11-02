import logo from '../../assets/cart.png';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div>
            <img className="imgCart" src={logo} alt="cart widget" />
        </div>
    )
}

export default CartWidget