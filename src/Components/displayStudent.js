import React from 'react';

function StudentDisplayView({students,age})
{
    return(
        <>
        <h1>
            Student Name Details List
        </h1>
        <ul>
            {
                students.map(student => <li style={{listStyle:"none"}} key={student}>{student}</li>)
            }
        </ul>
        <h1>
            Student Age Details
        </h1>
        <ul>
            {
                age.map(age => <li style={{listStyle:"none"}} key={age}>{age}</li>)
            }
        </ul>
        </>
    )
}

export default StudentDisplayView;