import './Login.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext'

// import { useForm } from '../../../hooks/useForm'
import { useForm } from 'react-hook-form'
export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext)
    // const { values, changeHandler, onSubmit } = useForm({
    //     email: '',
    //     password: ''
    // }, onLoginSubmit)
    const { register, handleSubmit, formState: { errors } } = useForm()
    return (
        <section className="login">
            <form onSubmit={handleSubmit(onLoginSubmit)} method='POST'>
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    {...register("email", {
                        required: "Please enter an email",
                        pattern: {
                            value: /^[a-zA-z0-9]+@[[a-zA-z]+\.[a-zA-z]+$/,
                            message: "Invalid email",
                        },
                    })}
                // value={values.email}
                // onChange={changeHandler}
                />
                <label className='wrongInput'>{errors.email?.message}</label>
                <label htmlFor="password">Password:</label>
                <input
                    {...register("password", { required: "Please enter a password", })}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                // value={values.password}
                // onChange={changeHandler}
                />
                <label className='wrongInput'>{errors.password?.message}</label>
                <button type="submit">Login</button>
                <p>Don`t have an account yet? <Link to="/register">Sign up</Link></p>
            </form>
        </section>
    )
}