import React, {useState} from 'react'

function IncreaseDecreaseCounter()
{
    const [incCount,setIncCount] = useState(0);
    const [decCount,setDecCount] = useState(0);

    return(
        <div>
        <button onClick={()=> setIncCount(incCount + 1)}>Count - {incCount}</button>
        <br></br>
        <button onMouseOver={()=> setDecCount(decCount - 1)}>Count - {decCount}</button>
        </div>
    )
}
export default IncreaseDecreaseCounter