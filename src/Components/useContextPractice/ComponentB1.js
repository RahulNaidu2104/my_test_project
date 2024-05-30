import React from 'react'
import ComponentC1 from './ComponentC1';

function ComponentB1(props)
{
    return(
        <div>
            <h1>Component B: {props.data1}</h1>
            <br></br>
            <ComponentC1 data2={props.data1}></ComponentC1>
        </div>
    )
}
export default ComponentB1;