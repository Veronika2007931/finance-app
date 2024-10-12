import { NavLink, Outlet } from "react-router-dom"
import {Link} from "./Layout.styled"

export const Layout=()=>{
    return(
<>
<div>
    <ul>
        <Link>
            <NavLink to="/">Homepage</NavLink>
        </Link>
        <Link>
            <NavLink to="/user-profile">Особистий кабінет</NavLink>
        </Link>
    </ul>
 </div>
 <Outlet/>
</>
    )
}