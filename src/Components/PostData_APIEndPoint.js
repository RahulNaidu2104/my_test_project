import React, {Component} from 'react'
import axios from 'axios'

class PostDataAPI extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            postId : "",
            name : "",
            email: "",
            body: ""
        }
    }

        changeHandler = (input) =>
            {
                this.setState({ [input.target.name] : input.target.value })
            }

        submitHandler = (input) =>
        {
            input.preventDefault();

            axios.post('https://jsonplaceholder.typicode.com/comments',this.state)
            .then(
                response => {
                    console.log(response.data)
                }
            )
            .catch(
                error => {
                    console.log(error)
                }
            )
        }

        render()
        {
            const {postId,name,email,body} = this.state
            return(
                <div>
                    <form action="" onSubmit={this.submitHandler}>
                        <label htmlFor="postId">Post ID: </label>
                        <input id='postId' type="text" name="postId" value={postId} onChange={this.changeHandler}/>
                        <br></br>
                        <label htmlFor="name">Name: </label>
                        <input id="name" type="text" name="name" value={name} onChange={this.changeHandler}/>
                        <br></br>
                        <label htmlFor="email">Email: </label>
                        <input id="email" type="text" name="email" value={email} onChange={this.changeHandler}/>
                        <br></br>
                        <label htmlFor="body">Body: </label>
                        <input id="body" type="text" name="body" value={body} onChange={this.changeHandler}/>
                        <br></br>
                        <button style={{fontWeight:"bold"}} type="submit">Submit</button>
                    </form>
                </div>
            )
        }
    }
export default PostDataAPI