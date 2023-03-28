import './Header.css'
import { Link } from 'react-router-dom';

import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
export const Header = () => {
    const { isAuthenticated } = useContext(AuthContext)
    return (
        <header>
            <h1><Link to="/" className="homeLink" >GamerGlance</Link></h1>
            <nav>
                < Link to="/catalog">All games</Link>
                {/* ? logged in : guests */}
                {isAuthenticated ? <div id="user">
                    <Link to="/create">Sell</Link>
                    < Link to="/profile">Profile</Link>
                    <Link to="/logout" id="logoutBtn">Logout</Link>
                </div>
                 : 
                 <div id="guest">
                    < Link to="/login">Login</Link>
                    < Link to="/register">Register</Link>
                </div>}


            </nav>
        </header >
    )
}