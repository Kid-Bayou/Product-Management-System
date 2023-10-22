import {Link, NavLink} from "react-router-dom"
import logo from "../../assets/logo.png"

function Header() {
    return (
        <>
            <header className="header">
                <Link className="logo-container" to="/">
                    <img src={logo} className="logo" />
                    <p className="logo-name">Product Management System</p>
                </Link>
                <nav className="nav">
                    <NavLink to="/login" className="nav-text">
                        Products
                    </NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header