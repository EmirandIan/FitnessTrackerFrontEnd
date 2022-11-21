import React, { useState, useEffect } from "react";
import CreateActivity from './newActivity';

import {useOutletContext} from 'react-router-dom';

const Activities = () =>{
    const {activityObj : [activities,setActivities] } = useOutletContext();

    const rActivities = [...activities].reverse();
    console.log(rActivities);
    return (
        <div>
          <CreateActivity/>
          {rActivities.map((activity,idx)=>{
            return(
                <div>
                  <div>
                  </div>
                  {activity.name}
                  {activity.description}

                </div>
            )
            })}
        </div>
    )
}

export default Activities;