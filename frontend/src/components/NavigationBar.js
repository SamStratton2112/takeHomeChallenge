import { NavLink } from "react-router-dom";

const NavigationBar = () =>{
    return(
        <nav>
            <NavLink to="/signup">Registration Page NAV</NavLink>
            <br/>
            <NavLink to="/admin">Admin Page NAV</NavLink>
            <br/>
            <NavLink to="/">Home NAV</NavLink>
        </nav>
    )
}
export default NavigationBar;