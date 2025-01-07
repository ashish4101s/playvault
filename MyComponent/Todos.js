import React from 'react'
import Todoitem from "./Todoitem";

const Todos = (props) => {
  let mystyle={
    minHeight:"70vh"
  }
  return (
    <div className="container" style={mystyle}>
      <h3 className='my-3'> Todos list</h3>
      {props.todos.length === 0 ? "No more to dos to be displayed" :
        
          props.todos.map((todos) => {
            return (<Todoitem todos={todos} key={todos.sno} OnDelete={props.OnDelete} />
            )

          })

        }
    </div>
  )
}

export default Todos