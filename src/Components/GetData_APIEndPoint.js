import React, {Component} from 'react'
import axios from 'axios'

class GetData extends Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            get : []
        }
    }
    componentDidMount()
        {
            axios.get('https://jsonplaceholder.typicode.com/posts')

            .then 
            (
                response => 
                {
                    this.setState(
                        {
                            get : response.data
                        }
                    )
                }
            )
            .catch
            (
                error => 
                    {
                        document.write("Unexpected Error occurred")
                    }
            )
        }

        render()
        {
            const {get} = this.state;
            console.log(get)
            return(
                <div>
                    <h1>
                        List of Data
                    </h1>
                    {
                        get.map(get => 
                        <div key={get.id} style={{textAlign: 'left'}}><h4>ID: {get.id}<br></br>UserID: {get.userId}<br></br>Body: {get.body}<br></br>Title: {get.title}</h4><br></br><br></br></div>
                    )
                    }
                </div>
            )
        }  
}
export default GetData;