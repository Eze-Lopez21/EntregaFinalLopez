import { createContext, useState } from 'react';

export const cartContext = createContext([]);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        if (isInCart(product.id)) {
            alert('Ya agregado');
        } else {
            setCart([ ...cart, { ...product, quantity }]);
        };
    };

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const removeProduct = (id) => setCart(cart.filter(item => item.id !== id));

    const clearCart = () => setCart([]);

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    }

    return (
        <cartContext.Provider value={{
            addToCart,
            removeProduct,
            clearCart,
            isInCart,
            totalProducts,
            cart,
        }}>
            {children}
        </cartContext.Provider>
    );
};

export default CartProvider;