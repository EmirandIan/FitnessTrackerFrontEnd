import React from "react"
import { useState, useEffect } from 'react';
import { getAllRoutines } from '../api';
import { Link } from 'react-router-dom';


const Routines = ({allActivities} ) => {
    const [allRoutines, setAllRoutines] = useState([]);
        useEffect(()=> {
            async function fetchRoutines(){
                if(!allRoutines.length){
                    const retrievedRoutines = await getAllRoutines();
                    setAllRoutines(retrievedRoutines);
                }
            }
            fetchRoutines();
        }, []);
    
    const reverseList = allRoutines.slice(0).reverse();
    const displayRoutines = allRoutines.length ? (
      <div>
        {reverseList.map((element, index) => {
          return (
            <div key={index}>
              <h2>Creator:</h2>{element.creatorName}
              <h2>Routine Title:</h2> {element.name}
              <h2>Routine Goal</h2>{element.goal}
              {element.activities.map((activity, index) => (
                <div key={index}>
                  Activity Name:{activity.name}
                  <h2> Activity Description:</h2>{activity.description}
                  <h2> Duration:</h2>{activity.duration}
                  <h2> Count:</h2>{activity.count}
                </div>
              ))}
            </div>
          );}
        )}
      </div>
    ) : (
      <div>Loading Routines...</div>
    );
    return(
      <div>
           {displayRoutines}
      </div>
    );
}
export default Routines;