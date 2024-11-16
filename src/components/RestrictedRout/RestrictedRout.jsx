
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuth } from "../../redux/selectors";
import { LoginPage } from "Pages/LoginPage";


export const RestrictedRout= ({element: Component, redirectTo = "/"})=>{
    const isLoggedIn = useSelector(selectAuth)
    return !isLoggedIn ? Component : <Navigate to={redirectTo}/>
}