import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';


const Login = () =>{
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();
    async function formSubmitHandler(event){
        event.preventDefault(); //what is this??
        try{
            const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/users/login', {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  username: username,
                  password: password
                })
            })
            const userData  = await response.json()
            console.log(userData)
            if(userData.token) {
                localStorage.setItem("token",userData.token)
                
            }
            navigate('/');
            console.log(userData);
        } catch(error){
            console.log(error)
        }
    }




    if (localStorage.getItem('token')) {
        async function fetchUserData () {
            try {
                const response = await fetch("https://fitnesstrac-kr.herokuapp.com/api/users/me", 
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                })
                const userData = await response.json();
                setCurrentProfile(userData.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUserData();
    }
    
    const createNameState = (event)=>{
        setUsername(event.target.value)
    }
    const createPassState = (event)=>{
        setPassword(event.target.value)
    }

    return (
        <div>
            <form onSubmit={formSubmitHandler}>

                <label>
                    Username
                </label>
                <input value={username} onChange={createNameState} type="text"/> 
                {/* will this cause isssuuuuuueee */}

                <label>
                    Password
                </label>
                <input value={password} onChange={createPassState} type="password"/> 
                {/* will this cause isssuuuuuueee */}

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login