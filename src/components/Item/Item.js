import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ product }) => {
    return (
        <Link to={`item/${product.id}`}>
            <div className="itemCard">
                <h2 className="itemCardInfo">{product.title}</h2>
                <p className="itemCardInfo">${product.price}</p>
            </div>
        </Link>
    );
};

export default Item