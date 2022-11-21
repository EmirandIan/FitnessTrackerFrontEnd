import React, {useState,useEffect} from "react"
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Homepage = () => {
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([])
    const [loggedIn, setLoggedIn] = useState(false);

    async function getRoutines(setter){
        try{
            const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines`, {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            let data = await response.json()
            console.log(data);
            setter(data);
        } catch(error){
            console.log(error);
        }
    }

    async function getActivities(setter){
        try{
            const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities', {
                headers: {
                  'Content-Type': 'application/json',
                }
            })
            let data = await response.json();
            console.log(data);
            setter(data);
        } catch(error){
            console.log(error);
        }
    }

  
    useEffect(()=>{
        getRoutines(setRoutines);
        getActivities(setActivities)
    },[])
    return (
     <div>
       
        <Navbar />
        <Outlet context={{
                routineObj: [routines,setRoutines],
                activityObj: [activities,setActivities],
                loginInfo: [loggedIn, setLoggedIn]
        }}/>
     </div>
    )
    
}

export default Homepage;