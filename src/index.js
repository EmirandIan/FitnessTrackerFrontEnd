import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Homepage, Activity, ErrorPage, Routines, RoutineActivity, User,  } from './components/index'



const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [    
            {
                path: "/Activity",
                element: <Activity />
            },
            {
                path: "/Routines",
                element: <Routines />
            },
            {
                path: "/RoutineActivity",
                element: <RoutineActivity />
            },
            {
                path: "/User",
                element: <User />
            }
           
            
        ]
    }
])

                
            
           
        
    


ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"))


// import React from "react-dom
// function Homepage ( {
//     reutrn(
//         <div>
//             <p>"hello world"</p>
//             </div>
//     )
// }

// ReactDOM.render(<Homepage />, document)
        