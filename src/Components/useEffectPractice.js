import React, {useState,useEffect} from 'react'

function UseEffectPractice()
{
    const [Count,setCount] = useState(0);
    useEffect(() => {
                document.title = `Count is ${Count}`
            }
    )

    return(
        <div>
            <h1>{Count}</h1>
            <button onClick={()=>(setCount(Count + 1))}>Count</button>
        </div>
    )
}
export default UseEffectPractice;