import React, {useState} from 'react';
import StudentDisplayView from './displayStudent';

function StudentDetails()
{
    const [input,setInput] = useState("");
    const [inputAge,setInputAge] = useState("");
    const [students,setStudents] = useState([]);
    const [studentsAge,setStudentsAge] = useState([]);
    
    function addStudentName()
    {
        if (input)
            {
                setStudents((prevState)=>[...prevState,input]);
                setInput("");
                console.log(students);
            }
    }
    function addStudentAge()
    {
        if (inputAge)
            {
                setStudentsAge((prevStateAge)=>[...prevStateAge,inputAge]);
                setInputAge("");
                console.log(studentsAge);
            }
    }

    return(
        <>
        <h1>Add Student Name</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={addStudentName}>Add Name</button>
        <br></br>
        <input type="text" value={inputAge} onChange={(e1)=>setInputAge(e1.target.value)}></input>
        <button onClick={addStudentAge}>Add Age</button>
        <StudentDisplayView students={students} age={studentsAge}></StudentDisplayView>
        </>
    )
}

export default StudentDetails;