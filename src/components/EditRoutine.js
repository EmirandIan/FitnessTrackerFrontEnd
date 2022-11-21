import React, {useState,useEffect} from "react";
import DeleteRoutine from './DeleteRoutine'

const EditRoutine = ()=>{
    const [name, setName] = useState("");
    const [goal, setGoal]= useState("");
    const [isPublic, setIsPublic] = useState(true);

    //PATCH /api/routines/:routineId
    async function fetchRoutineEdit(id){
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
                    goal:goal,
                    isPublic:isPublic
                })
            })
            const result = await response.json();
            console.log(result);
        }catch(error){
            console.log(error);
        }
    }

    const createNameState = (event) =>{
        setName(event.target.value)
    }
    const createGoalState=(event)=>{
        setGoal(event.target.value)
    }

    return(
        <div>
            <form  onSubmit={EditRoutine}>                 
                <label>
                    Change routine name
                </label>
                <input value={name} onChange={createNameState} type="text"/>
                <label>
                    Change routine goal
                </label>
                <input value={goal} onChange={createGoalState} type="text"/>
                <button onClick={(event)=>{event.preventDefault()
                fetchRoutineEdit(routine.id)}}>Update routine?</button>
            </form>

        </div>
    )
}

export default EditRoutine