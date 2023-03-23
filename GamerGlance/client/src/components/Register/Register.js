import './Register.css'
import { Link } from 'react-router-dom'
export const Register = () => {
    return (
        <section className="register">
            <form>
                <h1>Register</h1>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" />
                <label htmlFor="confirm_password">Confirm Password:</label>
                <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm your password" />
                <button type="submit">Register</button>
                <p>Already have an account? <Link to="/login">Sign in</Link></p>

            </form>
        </section>
    )
}