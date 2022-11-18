import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
const User = () =>{
    return(
    <div>
        <nav>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
        </nav>
    </div>
    )
    
}

export default User;