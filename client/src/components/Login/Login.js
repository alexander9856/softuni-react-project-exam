import './Login.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext'

import { useForm } from '../../hooks/useForm'

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit)
    return (
        <section className="login">
            <form onSubmit={onSubmit} method='POST'>
                <h1>Login</h1>
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
                <button type="submit">Login</button>
                <p>Don`t have an account yet? <Link to="/register">Sign up</Link></p>
            </form>
        </section>
    )
}