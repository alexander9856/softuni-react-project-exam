import './Header.css'
import { Link } from 'react-router-dom'
export const Header = () => {
    return (
        <header>
            <h1><Link to="/" className="homeLink" >GamerGlance</Link></h1>
            <nav>
                < Link to="/catalog">All games</Link>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <Link to="/create">Sell</Link>
                    < Link to="/profile">Profile</Link>
                    {/* <Link to="javascript:void(0)" id="logoutBtn">Logout</Link> */}
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    < Link to="/login">Login</Link>
                    < Link to="/register">Register</Link>
                </div>
            </nav>
        </header >
    )
}