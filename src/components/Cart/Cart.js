import './Cart.css'

const Cart = () => {
    return (
        <div className="cartCard">
            <h1 className="cartCardInfo">Tu carrito</h1>
            <button className="cartCardButton cartCardButton1">Comprar</button>
            <button className="cartCardButton cartCardButton2">Cancelar</button>
        </div>
    )
}

export default Cart