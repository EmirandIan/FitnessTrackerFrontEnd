// import { useState } from "react";
// import { editRoutine } from "../api";
// import { useParams, useNavigate } from 'react-router-dom';

// const EditRoutine = ({token, routine, userInfo, setIsEditMode}) => {
//     const [newName, setNewName] = useState('')
//     const [newGoal, setNewGoal] = useState('')
//     const navigate1 = useNavigate();

//     async function handleEdit() {
//         const storedToken = window.localStorage.getItem('Token');
//         const updatedRoutine = {
//             token: storedToken,
//             name: newName,
//             goal: newGoal,
//             isPublic: true,
//             routine
//         }

//         const results = await editRoutine(updatedRoutine)
//     }

//     return (
//         <div>
//         <form onSubmit={handleEdit}>
//             <label>Routine Name: </label>
//             <input type='text' onChange={(event) => setNewName(event.target.value)}  placeholder="Edit Name" required/>
//             <label>Goal: </label>
//             <input type='text' onChange={(event) => setNewGoal(event.target.value)}  placeholder="Edit goal" required/>
//             <button type='submit'>Submit Edit</button>
//         </form>
//         </div>
//     )
// }

// export default EditRoutine;