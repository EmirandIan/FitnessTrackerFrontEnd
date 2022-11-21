import React, {useState} from "react";

const Register = () =>{
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    async function formSubmitHandler(event){
        event.preventDefault(); 
        try{
            const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/users/register', {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  username: username,
                  password: password
                })
            })
            const userData  = response.json()
            console.log(userData);
        } catch(error){
            console.log(error)
        }
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
                    Enter New Username
                </label>
                <input value={username} onChange={createNameState} type="text"/> 
                {/* will this cause isssuuuuuueee */}

                <label>
                    Enter New Password
                </label>
                <input value={password} onChange={createPassState} type="password"/> 
                {/* will this cause isssuuuuuueee */}

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register