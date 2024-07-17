import React, {useState} from 'react'
// import DisplayTasks from './DisplayTasks';


function EditTask({edit_Title,edit_Description,edit_Status,Task})
    {
        console.log("ABDEF");
        const [Tasks,setTasks] = useState(Task);
        const [inputTitle, setInputTitle] = useState(edit_Title);
        const [inputDescription, setInputDescription] = useState(edit_Description);
        const [inputStatus, setInputStatus] = useState(edit_Status);

    function edit_UpdateValues(title,description,status)
    {
        for(let i=0;i<Task.length;i++)
            {
                if(Task[i].Title == title)
                    {
                        Task[i].Title = title;
                        Task[i].Description = description;
                        Task[i].Status = status;
                    }
            }
            // return (
            //     <DisplayTasks Task={Task}></DisplayTasks>
            // )
    }

    return(
        <div className='editTaskBody'>
            <h3>Edit Task</h3>
        <form className="editTaskForm">
            <div>
                {console.log("HELLO ALL")}
            <label for="Title" id="labelTitle"><b>Title of the Task:</b> </label>
            <input type="text" id="Title" value={inputTitle} onChange={(e)=>setInputTitle(e.target.value)} placeholder=' Enter Title' required></input>
            <br></br>
            <br></br>
            <label for="Description"><b>Description of the Task:</b> </label>
            <input type="text" id="Description" value={inputDescription} onChange={(e)=>setInputDescription(e.target.value)} placeholder=' Enter Description' required></input>
            <br></br> 
            <br></br>
            <b>Status: </b>
            <input type='radio' id='AddTaskRadioButton_InProgress' value='In Progress' name='AddTaskRadioButton' onChange={(e)=>setInputStatus(e.target.value)} required></input>
            <label for="AddTaskRadioButton_InProgress">InProgress</label>
            <input type='radio' id='AddTaskRadioButton_Completed' value='Completed' name='AddTaskRadioButton' onChange={(e)=>setInputStatus(e.target.value)}></input>
            <label for="AddTaskRadioButton_Completed">Completed</label>
            <br></br> <br></br>
            <div className='buttons'>
            <button type='submit' onClick={() => edit_UpdateValues(inputTitle,inputDescription,inputStatus)}>Edit Task</button> &nbsp;
            <button type='reset'>Reset</button>
            </div>
            </div>
        </form>
        </div>
    )  
}

export default EditTask;