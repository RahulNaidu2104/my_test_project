import React from 'react'
import { Context } from '../../App';

function ComponentC2() {
  return (
    <div>
        <Context.Consumer>
            {
                user => {
                    return (
                    <h1>
                        Context Data: {user}
                    </h1>
                    )
                }
            }
        </Context.Consumer>
    </div>
  )
}

export default ComponentC2;