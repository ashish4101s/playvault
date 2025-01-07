import React from 'react'

const Todoitem = ({todos,OnDelete}) => {
  return (
    <div>
      <h4>{todos.title}</h4>
      <p>{todos.desc}</p>
      <button className="btn btn-danger" onClick={()=>{OnDelete(todos)}}>delete</button>
    </div>
  )
}

export default Todoitem
