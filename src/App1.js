
import './App.css';
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import Todos from "./MyComponent/Todos";
import Todoitem from "./MyComponent/Todoitem";
import React, { useEffect, useState } from "react";
import AddtoDo from "./MyComponent/AddToDo";
import { cleanup } from '@testing-library/react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const OnDelete = (todo) => {
    console.log("I am on delete function", todos)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this new to do", title, desc)
    let sno;
    if (todos.length == 0) {
      sno = 1;
    }
    else {
      let sno = todos[todos.length - 1
      ].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    

    

  }
  
  const [todos, setTodos] = useState([{
    sno: 1,
    title: "go to market",
    desc: "get the market work done"
  },
  {
    sno: 2,
    title: "go to lab",
    desc: "get practicals done"
  },
  {
    sno: 3,
    title: "go to court",
    desc: "get the court work done"
  }
  ]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }, [todos])
  return (

    <>
      <Header title="MY To Dos List" />
      <AddtoDo addTodo={addTodo} />
      <Todos todos={todos} OnDelete={OnDelete} />
      <Footer />
    </>



  );
}

export default App;
