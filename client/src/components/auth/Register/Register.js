import './Register.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { useForm } from '../../../hooks/useForm'
import { AuthContext } from '../../../contexts/AuthContext'
export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        username: "",
        email: '',
        password: '',
       'confirm-password': '',
    }, onRegisterSubmit);
    return (
        <section className="register">
            <form onSubmit={onSubmit}>
                <h1>Register</h1>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={changeHandler}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={changeHandler}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={changeHandler}
                />
                <label htmlFor="confirm_password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Confirm your password"
                    value={values['confirm-password']}
                    onChange={changeHandler}
                />
                <button type="submit">Register</button>
                <p>Already have an account? <Link to="/login">Sign in</Link></p>

            </form>
        </section>
    )
}