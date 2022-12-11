import './ItemCount.css'

const ItemCount = ({ setCount, count }) => {
    const addItem = () => {
        setCount ((currentValue) => currentValue +1);
    };
    const removeItem = () => {
        setCount ((currentValue) => {
            if (currentValue > 1) {
                return currentValue - 1;
            } else {
                return currentValue;
            }
        });
    };
    return (
        <div>
            <button onClick={addItem} className="addCount" >Agregar Item</button>
            <p className="count">{count}</p>
            <button onClick={removeItem} className="lessCount">Quitar Item</button>
        </div>
    );
};

export default ItemCount