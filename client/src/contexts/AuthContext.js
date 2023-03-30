import { createContext } from 'react'
import { login, register, logout } from '../services/data'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const Auth = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('user', {});
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
            const result = await register(data)
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
    }
    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
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