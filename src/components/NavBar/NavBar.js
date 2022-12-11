import { Link, NavLink } from "react-router-dom"
import CartWidget from '../CartWidget/cartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navBar">
            <h1 className="navBarTitle">Sazón</h1>
            <ul className="navBarList">
                <li className="navBarItemList">
                    <NavLink to="/" className="navBarItemList">Productos</NavLink>
                </li>
                <li className="navBarItemList">
                    <NavLink to="/category/carne" className="navBarItemList">Carne</NavLink>
                </li>
                <li className="navBarItemList">
                    <NavLink to="/category/pollo" className="navBarItemList">Pollo</NavLink>
                </li>
            </ul>
            <div className="navBarItemList navBarCart">
                <Link to="/cart" className="navBarCart"><CartWidget /></Link>
            </div>
        </div>
    )
}

export default NavBar