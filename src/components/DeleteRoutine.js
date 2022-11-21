const deleteRoutine =()=> {
    //DELETE /api/routines/:routineId (**)
async function deleteRoutine(id){
        try{
            const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines/${id}`, {
                method: "DELETE",
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            const result = await response.json();
            console.log(result);
        }catch(error){
            console.log(error)
        }
    }
}