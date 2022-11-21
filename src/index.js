import {createRoot} from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { Homepage, Activities, ErrorPage, Routines, 
    RoutineActivity, User, Register,Login,
     CreateActivity, CreateRoutine  } from './components/index'
const appElement =document.getElementById('app');
const root = createRoot(appElement);




const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [    
            {
                path: "/Activities",
                element: <Activities />
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
            },
            {
                path:'/newActivity',
                element:<CreateActivity />
            },
            {
                path:'/newRoutine',
                element:<CreateRoutine/>
            }
        ]
    }
])

root.render(<RouterProvider router={router} />)

