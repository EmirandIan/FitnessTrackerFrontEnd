import React,{useState} from "react";
import {useOutletContext} from 'react-router-dom';

const CreateActivity = () => {
    const [name,setNamer] = useState("");
    const [description, setDescription] = useState("");
    const {activityObj: [activities, setActivities]} = useOutletContext();
    // POST /api/activities
    async function formSubmitHandler(event){
        event.preventDefault();
            try {
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities`, {
                method: "POST",
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    name,
                    description 
                })
            })
            
            const result = await response.json();
            setActivities([...activities, result])
            
            } catch(error) {
            console.log(error)
            }
    }

    const createNameState = (event)=>{
        setNamer(event.target.value)
    }
    const createDescriptionState = (event)=>{
        setDescription(event.target.value)
    }
    return(
    <div>
        <form onSubmit={formSubmitHandler}>
            <label> CREATE NEW ACTIVITY</label>
            <label>Activity Name </label>
            <input value={name} onChange={createNameState} type="text"/>

            <label>Fill in the description</label>
            <input value={description} onChange={createDescriptionState} type="text"/>

            <button type="submit">create new activity</button>
        </form>
    </div>
    )

}

export default CreateActivity;