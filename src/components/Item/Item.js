import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ product }) => {
    return (
        <Link to={`item/${product.id}`} className="itemCardInfo">
            <div className="itemCard">
                <h2 className="itemCardInfo">{product.title}</h2>
                <img
                src={`images/${product.imageId}`}
                alt={product.title}
                width={'300px'}
                />
                <p className="itemCardInfo blackLetter">${product.price}</p>
                <p className="itemStockInfo blackLetter">Stock: {product.stock} unidades</p>
            </div>
        </Link>
    );
};

export default Item;