import { Link, NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navBar">
            <h1 className="navBarTitle">Sazón</h1>
            <ul className="navBarList">
                <li className="navBarItemList">
                    <NavLink to="/">Productos</NavLink>
                </li>
                <li className="navBarItemList">
                    <NavLink to="/category/carne">Carne</NavLink>
                </li>
                <li className="navBarItemList">
                    <NavLink to="/category/pollo">Pollo</NavLink>
                </li>
            </ul>
            <div className="navBarItemList navBarCart">
                <Link to="/cart">Carrito</Link>
            </div>
        </div>
    )
}

export default NavBar