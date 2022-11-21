import React from "react"
import CreateRoutine from "./newRoutine";
import {useOutletContext} from 'react-router-dom';

const Routines = () => {
  const {routineObj:[routines,setRoutines]} = useOutletContext();

  //get routines and look at them
  console.log(routines);
  const rRoutines = [...routines].reverse();
  console.log(rRoutines)
  
  
  return (
    <div>
      <CreateRoutine/>
      {rRoutines.map((routine,idx)=>{
        return(
          routine.isPublic?
          <div>
            <div key={idx}>
            <div className="name">
          {routine.name}
            </div>
            </div>
            <div className="goal">{routine.goal}</div>
            </div>

          :<div></div>
      )
    })
    }

    <div> Routines </div>
    </div>
  )
}
export default Routines;
