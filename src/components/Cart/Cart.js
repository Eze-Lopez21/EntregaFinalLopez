import { useContext, useState, useEffect } from 'react';
import { collection, doc, updateDoc, addDoc, getFirestore } from 'firebase/firestore';
import moment from 'moment';
import { cartContext } from '../../context/CartProvider';
import './Cart.css'

const Cart = () => {
    const { cart, removeProduct } = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const getTotalPrice = () => {
        setTotal(cart.reduce((acc, product) => acc + product.price * product.quantity, 0));
    };
    const createOrder = () => {
        const db = getFirestore();
        const query = collection(db, 'order');
        const newOrder = {
            buyer: {
                name: formValues.name,
                phone: formValues.phone,
                email: formValues.email,
            },
            date: moment().format('DD/MM/YYYY'),
            items: cart,
            total: total,
        };
        addDoc(query, newOrder)
        .then((response) => {alert(`Orden #${response.id}`)
        return(response)
        })
        .then((res) => {
            cart.forEach((product) => {
                const query = doc(db, 'items', product.id);
                updateDoc(query, {
                    stock: product.stock - product.quantity,
                });
            });
        })
        .catch((error) => console.error(error));
    };
    useEffect(() => {
        getTotalPrice();
    }, [cart]);

    const handleInputChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name] : event.target.value
        });
    };
    return (
        <>
        <h1 className="formCartTitle">Tu carrito</h1>
            {cart.map((product) => (
                <div key={product.id} className="cartCard">
                    <h2 className="cartCardInfo">{product.title}</h2>
                    <img
                    alt={product.title}
                    src={`/images/${product.imageId}`}
                    className="cartCardImg"
                    />
                    <h2 className="cartCardPrice">${product.price}</h2>
                    <h2 className="cartCardDesc">{product.description}</h2>
                    <h2 className="cartCardQuant">Cantidad:{product.quantity}</h2>
                    <button
                    onClick={() => removeProduct(product.id)}
                    className="removeButton"
                    >Eliminar</button>
                </div>
            ))};
            <div>
                <h2 className="formTotal">Total:{total}</h2>
                <div>
                    <h2 className="formTitle">Rellene esta forma y su pedido estará completo..</h2>
                    <input
                    name='name'
                    type="text"
                    placeholder="Nombre"
                    value={formValues.name}
                    onChange={handleInputChange}
                    className="formInput formInput1"
                    />
                    <input
                    name='phone'
                    type="text"
                    placeholder="Teléfono"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    className="formInput"
                    />
                    <input
                    name='email'
                    type="text"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    className="formInput"
                    />
                    <button onClick={createOrder} className="formButton">Crear una orden</button>
                </div>
            </div>
        </>
    );
};

export default Cart