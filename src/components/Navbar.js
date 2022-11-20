import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav id="flexContainer">
            <span> <Link className="Navigation" to="">Home</Link></span>
            <span> <Link className="Navigation"to="Activity">Activity</Link></span>
            <span> <Link className="Navigation"to="Routines">Routines</Link></span>
            <span> <Link className="Navigation"to="RoutineActivity">RoutineActivity</Link></span>
            <span> <Link className="Navigation"to="User">User</Link></span>
        </nav>
    )
}

export default Navbar;
