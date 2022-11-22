import React from "react"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const User = () =>{
    const [username,setUsername] = useState("");
    const [myRoutines,setMyRoutines] = useState("");
    const [name, setName] = useState("");
    const [goal, setGoal]= useState("");
    const rMyRoutines = [...myRoutines].reverse();
   //GET /api/users/me
    async function pullProfile(setter){
        try{
            if(!localStorage.getItem("token")){
                console.log("you are not logged in")
                return;
            }
            const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/users/me', {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
            })
            const result = await response.json();
            console.log(result);
            setter(result.username)
        } catch(error){
            console.log(error)
        }
    }

    //GET /api/users/:username/routines
    async function pullMyRoutines(setter){
        try{
            if(!username){
                console.log("user not set")
                return;
            }
            const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`,
            {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
            })
            const result = await response.json();
            console.log(result);
            setter(result);
        }catch(error){
            console.log(error);
        }
    }
    //DELETE /api/routines/:routineId (**)
    async function deleteRoutine(id){

        try{
            const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines/${id}`, {
                method: "DELETE",
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            const result = await response.json();
            console.log(result);
        }catch(error){
            console.log(error)
        }
    }
    //PATCH /api/routines/:routineId
    async function editRoutine(id){
        event.preventDefault();
        console.log("this is what I'm sending to " ,id)
        try{
            const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines/${id}`, 
            {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                  name: name,
                  goal: goal,
                })
            })
            const result = await response.json();
            console.log(result);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        pullProfile(setUsername);
        
    },[]);
    useEffect(()=>{
        console.log(username)
        pullMyRoutines(setMyRoutines)
    },[username])



    const createNameState = (event) =>{
        setName(event.target.value)
    }
    const createGoalState=(event)=>{
        setGoal(event.target.value)
    }
    return(
    <div>
        <nav>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
            <div>{username}</div>
            <div>
            Routines
                {rMyRoutines.map((routine,idx)=>{
                    return(
                        //Take the code on line 119 of users.js in components, 
                        //turn it into a component, and give it local state for the inputs, 
                        //and it will separate the state for each routine

                        <div className="routineBox">
                                {routine.name}
                                {routine.goal}
                            
                                <button onClick={(event) =>{event.preventDefault()
                                deleteRoutine(routine.id)}}>Delete?</button>

                            <div>
                                <form  onSubmit={editRoutine}>
                                    
                                    <label>
                                        Change routine name
                                    </label>
                                    <input value={name} onChange={createNameState} type="text"/>

                                    <label>
                                        Change routine goal
                                    </label>
                                    <input value={goal} onChange={createGoalState} type="text"/>
                                <button onClick={(event)=>{event.preventDefault()
                                editRoutine(routine.id)}}>Update routine?</button>
                                </form>
                            </div>   
                        </div>                
                    
                    )
                })}
            </div>
        </nav>
    </div>
    )
}


export default User;