import React, {Component} from 'react'
import axios from 'axios'

class PracticeAPIGet extends Component
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
                    this.setState
                        (
                            {
                                get: response.data
                            }
                        )
                }
            )
            .catch
            (
                console.log("Unexpected Error")
            )
        }

    render()
    {
        const {get} = this.state
        return(
            <div>
                <h1>
                    List of Data
                </h1>
                {
                    get.map(get => <div style={{textAlign:'left'}} key={this.state.get.id}> ID: {get.id} <br></br> Title: {get.title} <br></br> User ID: {get.userId} <br></br> Body: {get.body} <br></br> <br></br> </div>
                    )
                }
            </div>
        )
    }
}
export default PracticeAPIGet;