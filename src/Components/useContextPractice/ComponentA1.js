import React from 'react'
import ComponentB1 from './ComponentB1';

function ComponentA1(props)
{
    return(
        <div>
            <h1>Component A: {props.name}</h1>
            <br></br>
            <ComponentB1 data1={props.name}></ComponentB1>
        </div>
    )
}
export default ComponentA1;