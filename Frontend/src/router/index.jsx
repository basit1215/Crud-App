import React from "react";
import ForgotPassword from "../components/ForgotForm";
import ResetPassword from "../components/ResetPasswordForm";
import Dashboard from "../pages/Dashboard/dashboard";
import Login from "../pages/Login";
import Register from "../Pages/Register";

export const router = [
    {
        path: '/',
        component: <Login/>,
    },
    {
        path: '/login',
        component: <Login/>,
    },
    {
        path: '/register',
        component: <Register/>,
    },
    {
        path: '/forgot-password',
        component: <ForgotPassword/>,
    },
    {
        path: '/reset-password/:token',
        component: <ResetPassword/>,
    },
    {
        path: '/dashboard',
        component: <Dashboard/>,
    }
]