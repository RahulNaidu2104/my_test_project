import React, {useState} from 'react'
import './style.css'
import EditTask from './EditTask';

function DisplayTasks({Task})
{
    const [deleteTask,setDeleteTask] = useState(Task);
    
    function DeleteTask(delete_title)
    {
        const index = Task.findIndex(element => element.Title == delete_title);
        Task = Task.splice(index, 1);
        alert("Task Deleted");
        setDeleteTask(Task);
    }

    function Edit(title,description,status)
    {
        return(
            <div>
                <EditTask edit_Title={title} edit_Description={description} edit_Status={status} Task={Task}></EditTask>
                {console.log(title,description,status)}
            </div>
        )
    }

    const EachTask = Task.map(EachTaskDetail => {
        return(
            <>
                <ul className='displayList'>
                    <li>
                        <div className='flexContainer'>
                        <div>
                        <b>Title:</b> {EachTaskDetail.Title} 
                        <br></br>
                        <b>Description:</b> {EachTaskDetail.Description}
                        <br></br>
                        <b>Status:</b> {EachTaskDetail.Status}
                        <br></br>
                        </div>
                        <div>
                        <button type='submit' id='deleteButton' onClick={()=>DeleteTask(EachTaskDetail.Title)}>Delete Task</button> &nbsp;
                        <button type='submit' id='editButton' onClick={()=>Edit(EachTaskDetail.Title,EachTaskDetail.Description,EachTaskDetail.Status)}>Edit Task</button>
                        </div>
                        </div>
                    </li>
                </ul>
            </>
        )
    })
    return (
        <div className='boxDisplay'>
        <h1>All Tasks</h1>
        {EachTask}
        </div>
        );
}

export default DisplayTasks;