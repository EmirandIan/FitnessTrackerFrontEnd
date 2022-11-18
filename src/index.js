import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Homepage, Activity, ErrorPage, Routines, RoutineActivity, User, Register,Login  } from './components/index'

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
            },
            {
                path: "/Register",
                element: <Register />
            },
            {
                path:"/Login",
                element: <Login />
            }
            
        ]
    }
])

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"))

