import './Login.css'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <section className="login">
            <form>
                <h1>Login</h1>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" />
                <button type="submit">Login</button>
                <p>Don`t have an account yet? <Link to="/register">Sign up</Link></p>
            </form>
        </section>
    )
}