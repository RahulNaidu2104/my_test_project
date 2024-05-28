import React, {Component} from 'react'
import axios from 'axios'

class PostData extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            postId : "",
            name : "",
            email: "",
            body: ""
        }
    }

    changeHandler = (input) => 
        {
            this.setState({ [input.target.name]: input.target.value})
        }
    
    submitHandler = (input) =>
    {
        input.preventDefault()
        console.log(this.state)

        axios.post('https://jsonplaceholder.typicode.com/comments',this.state)

        .then(
            response => {
               console.log(response) 
            }
        )
        .catch(
            error => {
                console.log("Unexpected Error" + error)
            }
        )
    }

    render()
    {
        const {postId,name,email,body} = this.state
        return(
            <div>
                <form action="" onSubmit={this.submitHandler}>
                    <label htmlFor="postId">PostID: </label>
                    <input id="postId"  type="text" onChange={this.changeHandler} name="postId" value={postId} />
                    <br></br>
                    <label htmlFor="name">Name: </label>
                    <input id="name"  type="text" onChange={this.changeHandler} name="name" value={name} />
                    <br></br>
                    <label htmlFor="email">EmailID: </label>
                    <input id="email"  type="text" onChange={this.changeHandler} name="email" value={email} />
                    <br></br>
                    <label htmlFor="body">Body: </label>
                    <input id="body"  type="text" onChange={this.changeHandler} name="body" value={body} />
                    <br></br>
                    <button type="Submit">Submit</button>
                </form>
                
            </div>
        )
    }
}
export default PostData;