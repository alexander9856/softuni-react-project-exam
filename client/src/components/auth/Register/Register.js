import './Register.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import { useForm } from '../../../hooks/useForm'

import { AuthContext } from '../../../contexts/AuthContext'
export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()

    // const { values, changeHandler, onSubmit } = useForm({
    //     username: "",
    //     email: '',
    //     password: '',
    //    'confirm-password': '',
    // }, onRegisterSubmit);
    return (
        <section className="register">
            <form onSubmit={handleSubmit(onRegisterSubmit)}>
                <h1>Register</h1>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"

                    {...register("username", {
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message: "Username must be at least 3 characters long",
                        },
                    })}
                // value={values.username}
                // onChange={changeHandler}
                />
                <label className='wrongInput'>{errors.username?.message}</label>

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email is required"
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
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: "Password is required",
                        pattern: {
                            value: /^[a-zA-Z0-9]{3,14}$/,
                            message: "Password must be between 3 and 14 characters - letters and numbers",
                        }
                    })}

                // value={values.password}
                // onChange={changeHandler}
                />
                <label className='wrongInput'>{errors.password?.message}</label>

                <label htmlFor="confirm_password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Confirm your password"
                    {...register("confirm-password", {
                        required: "Confirm-password is required",
                        validate: (value) => {
                            const { password } = getValues();
                            return password === value || "Passwords must match!"
                        }
                    })}
                // value={values['confirm-password']}
                // onChange={changeHandler}
                />
                <label className='wrongInput'>{errors['confirm-password']?.message}</label>
                <button type="submit">Register</button>
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
            </form>
        </section>
    )
}