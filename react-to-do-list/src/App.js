import React, { useState } from "react";
import ChangeTitle from "./components/ChangeTitle";
import ToDoList from "./components/ToDoList";
import './styles/App.css'

function App() {
  //let likes = 0;
  const [state, setCount] = useState(0);

  function setLikes() {
    setCount(state);
  }

  function increment() {
    setCount(state + 1);
  }

  function decrement() {
    setCount(state - 1);
  }



  return (
    <div className="App">
        <h1>{state}</h1>
        <ChangeTitle/>
        <ToDoList/>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  );
}


export default App;
