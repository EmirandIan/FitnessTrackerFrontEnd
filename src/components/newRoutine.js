import React, { useState } from 'react';
import{useOutletContext} from 'react-router-dom'
const CreateRoutine = () =>{
    const [name,setNamer] = useState("");
    const [goal,setGoal] = useState("");
    const [isPublic,setIsPublic] = useState(true);
    const {routineObj: [routines,setRoutines]} = useOutletContext();
    async function formSubmitHandler(event){
        event.preventDefault();
        try{
            const response = await fetch("http://fitnesstrac-kr.herokuapp.com/api/routines",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    name:name,
                    goal: goal,
                    isPublic: isPublic
                })
            })
            const result = await response.json();
            console.log(response)
            console.log(result)
            setRoutines([...routines, result]);
        } catch(error){
            console.log(error)
        }
    }
    const createNameState = (event)=>{
        setNamer(event.target.value)
    }
    const createGoalState = (event)=>{
        console.log(event.target.value)
        setGoal(event.target.value)
    }
    return(
        <div>
            <form onSubmit={formSubmitHandler}>
            <label> CREATE NEW ROUTINE</label>
            <label>Routine Name </label>
            <input value={name} onChange={createNameState} type="text"/>
            <label>Fill in the Goal!!!</label>
            <input value={goal} onChange={createGoalState} type="text"/>
            <button type="submit">create new routine</button>
        </form>
        </div>
    )
}
export default CreateRoutine;