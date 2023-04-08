import './Header.css'
import { Link } from 'react-router-dom';

import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
export const Header = () => {
    const { isAuthenticated } = useContext(AuthContext)
    return (
        <header>
            <h1><Link to="/" className="homeLink">GamerGlance</Link></h1>
            <nav>
                < Link to="/catalog"><i className="fa-solid fa-gamepad"></i>All games</Link>
                {/* ? logged in : guests */}
                {isAuthenticated ? <div id="user">
                    <Link to="/create"><i className="fa-solid fa-circle-plus"></i>Sell</Link>
                    <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i>Shopping cart</Link>
                    <Link to="/profile"><i className="fa-solid fa-user"></i>Profile</Link>
                    <Link to="/logout" id="logoutBtn"><i className="fa-solid fa-right-from-bracket"></i>Logout</Link>
                </div>
                    :
                    <div id="guest">
                        < Link to="/login"><i className="fa-solid fa-right-to-bracket"></i>Login</Link>
                        < Link to="/register"><i className="fa-solid fa-user-plus"></i>Register</Link>
                    </div>}


            </nav>
        </header >
    )
}