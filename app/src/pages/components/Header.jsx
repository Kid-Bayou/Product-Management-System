import {Link, NavLink} from "react-router-dom"
import logo from "../../assets/logo.png"

function Header() {
    return (
        <>
            <header className="main-header">
                <Link className="site-logo" to="/">
                    <img src={logo} className="logo" />
                    <p className="logo-name">Product Management System</p>
                </Link>
                <nav className="nav">
                    <NavLink to="/login">
                        Products
                    </NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header