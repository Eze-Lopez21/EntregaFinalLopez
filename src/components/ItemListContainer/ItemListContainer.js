import './ItemListContainer.css';
const ItemListContainer = (props) => {
    return (
        <div className="containerGreeting">
            <h2 className="greeting">{props.name}</h2>
        </div>
    )
}

export default ItemListContainer