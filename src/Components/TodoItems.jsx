import React from 'react'

const TodoItems = (props) => {
  return (
    <div>
        <h1>{props.singleUser.name}</h1>
        <h1>{props.singleUser.email}</h1>
    </div>
  )
}

export default TodoItems