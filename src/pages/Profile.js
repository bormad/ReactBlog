import React from "react";
import { Navigate } from "react-router";

export const Profile = () => {
    
    if(!window.localStorage.getItem('token')) {
        return <Navigate to={'/'}/>
    }

    return (
        <h1>
            Это страница профиля
        </h1>
    )
}