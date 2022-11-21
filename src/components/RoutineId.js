import React, {useState,useEffect} from "react"
import { useOutletContext,useParams, Link } from "react-router-dom";
import EditRoutine from "./EditRoutine"


const RoutineId = () =>{
    const [routine, setRoutine] = useState("")

    const {routineObj:[routines,setRoutines]} = useOutletContext();
    const {id} = useParams();
    console.log(routines);
    
    useEffect(()=>{
        //this is filtering through EVERY single location in your array and finding the one with THAT id
        const routineFilter  = routines.filter((routine)=>{
            return id == routine.id
        })
        //this code is really cost wasteful. and I'm not sure how to fix that.
        setRoutine(routineFilter[0]);
        console.log(routine);
    },[]);

    return(
        <div>
            <h2>Routine Name </h2>
            {routine.name}
            
            <h2>Routine Goal </h2>
            {routine.goal}
            
            {routine.activities != null&&routine.activities.length !=0 ?
            routine.activities.map((activity,idx)=>{
                return(
                    <div>
                        <h3>Activity Information</h3>
                        name {activity.name}
                        description{activity.description}



                    </div>
                )
            }):<div></div>}
            <EditRoutine />
            
            
        </div>
    )
}

export default RoutineId