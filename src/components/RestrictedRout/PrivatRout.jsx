import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuth } from "../../redux/selectors";

export const PrivatRout= ({element: Component, redirectTo})=>{
    const isLoggedIn = useSelector(selectAuth)
    return isLoggedIn ? Component : <Navigate to={redirectTo}/>
}