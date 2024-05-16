import React from 'react'

let StudentLogIn = ({name,sportsname}) =>
{
    let StudentLoggedIn = true;
    if (StudentLoggedIn)
        {
            return(
            <div>
                <h1>My name is {name} and I play {sportsname}</h1>
            </div>
            )
        }
    else
    {
        return(
            <div>
                <h1>Student not logged in</h1>
            </div>
            )
    }
}

export default StudentLogIn