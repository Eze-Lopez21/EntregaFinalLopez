import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navBar">
            <h1 className="navBarTitle">Sazón</h1>
            <ul className="navBarList">
                <li className="navBarItemList">
                    <a className="navBarItem" href=''>Productos</a>
                </li>
                <li className="navBarItemList">
                    <a className="navBarItem" href=''>Nosotros</a>
                </li>
                <li className="navBarItemList">
                    <a className="navBarItem" href=''>Contacto</a>
                </li>
            </ul>
            <CartWidget></CartWidget>
        </div>
    )
}

export default NavBar