import React, {useState} from 'react'
import DisplayTasks from './DisplayTasks';
import './style.css'

function AddTasks()
{
    const [showDisplayPanel, setShowDisplayPanel] = useState(false)
    const [Tasks,setTasks] = useState([]);
    const [inputTitle, setInputTitle] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [inputStatus, setInputStatus] = useState(false);

    function ShowDisplayPanel() {
        setShowDisplayPanel(true)
    }
    
    function HideDisplayPanel() {
        setShowDisplayPanel(false)
    }

    function addTask(inputTitle,inputDescription,inputStatus)
    {
        if(Tasks.length>0)
            {
            for(let i = 0; i < Tasks.length; i++)
                {
                    if(Tasks[i].Title==inputTitle)
                        {
                            alert("A task with the same title is already present");
                            setInputTitle("");
                            setInputDescription("");
                            break;
                        }
                    else if(i==Tasks.length - 1)
                    {
                        if(inputTitle) {
                            const addTaskInList = {
                                    Title: inputTitle,
                                    Description: inputDescription,
                                    Status: inputStatus
                                };
                            setTasks((previousState) => [addTaskInList,...previousState]);
                            setInputTitle("");
                            setInputDescription("");
                            setInputStatus(false);
                            alert("Task Added Successfully")
                        }
                    }
                    else
                    {
                        continue;
                    }
                }
            }
        else
        {
            if(inputTitle) {
                const addTaskInList = {
                        Title: inputTitle,
                        Description: inputDescription,
                        Status: inputStatus
                    };
                setTasks((previousState) => [addTaskInList,...previousState]);
                setInputTitle("");
                setInputDescription("");
                alert("Task Added Successfully")
            }
        }
    }
    return (
        <div className="addTaskBody">
            <h3>Add New Task</h3>
            <form className="addTaskForm">
                <div>
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
                <button type='submit' onClick={()=>addTask(inputTitle,inputDescription,inputStatus)}>Add Task</button> &nbsp;
                <button type='reset'>Reset</button>
                </div>
                </div>
            </form>
            <br></br> <br></br> <br></br> 
            <button onClick={()=>ShowDisplayPanel()}>Show Tasks Panel</button> &nbsp;
            <button onClick={()=>HideDisplayPanel()}>Hide Tasks Panel</button>
            { showDisplayPanel ? <DisplayTasks Task = {Tasks}></DisplayTasks> : '' }
        </div>
    )
}

export default AddTasks;