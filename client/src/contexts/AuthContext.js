import { createContext, useContext } from 'react'
import { login, register, logout } from '../services/data'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage';
import { GameContext } from './GameContext'

export const AuthContext = createContext();

export const Auth = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('user', {});
    const { setItems } = useContext(GameContext)
    const navigate = useNavigate()

    const onLoginSubmit = async (data) => {
        try {
            const result = await login(data)
            setAuth(result)
            navigate('/')
        }
        catch (err) {
            console.log(err)
        }
    };
    const onRegisterSubmit = async (data) => {
        try {
            const result = await register({ email: data.email, password: data.password })
            console.log(result)

            setAuth(result)
            navigate('/')
        }
        catch (err) {
            console.log(err)
        }
    };

    const onLogout = async () => {
        await logout();
        setAuth({})
        setItems([])
        localStorage.removeItem('user')
    }
    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        username: auth.username,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    }
    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    )
}