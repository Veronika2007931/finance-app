import { NavLink, Outlet } from "react-router-dom"

export const Layout=()=>{
    return(
<>
<div>
    <ul>
        <li>
            <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
            <NavLink to="/user-profile">Особистий кабінет</NavLink>
        </li>
    </ul>
 </div>
 <Outlet/>
</>
    )
}