import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Homepage, } from './components/index'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        children: [
         
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
        