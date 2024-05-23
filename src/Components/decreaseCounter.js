import React, { Component } from 'react'

class DecreaseCount extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            count: 100
        }
    }

    decrease = () => 
        {
            this.setState({count: this.state.count - 1});
        }
        

    render()
    {
        return(
            <div>
                <h2>Count is - {this.state.count}</h2>
                <button onClick={this.decrease} style={{height: 30,fontSize:20,color: "blue",fontWeight: "bold",fontStyle: "italic"}}> Click to Decrease</button>
            </div>
        )
    }
}

export default DecreaseCount;