import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav>
            <Link to="">Home</Link>
            <Link to="Activities">Activities</Link>
            <Link to="Routines">Routines</Link>
            <Link to="RoutineActivity">RoutineActivity</Link>
            <Link to="User">User</Link>
        </nav>
    )
}

export default Navbar;
