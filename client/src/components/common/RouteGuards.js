import { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from "../../contexts/AuthContext";

export const RouteGuard = () => {
    const { isAuthenticated } = useContext(AuthContext);
    console.log(isAuthenticated)
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return <Outlet />
};