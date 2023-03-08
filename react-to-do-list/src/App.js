import React, { useState } from "react";
import InputText from "./components/InputText";
import ToDoList from "./components/ToDoList";
import './css/App.css'

function App() {

  function onTitleChanged(value) {
    if (value === "") {
      alert("Please add new title first");
      return false;
    }
    document.title = value;
    return true;
  }

  return (
    <div className="App">
      <InputText onButtonClick={onTitleChanged} buttonTitle="Change" title="Set New Title"/>
      <ToDoList/>
        
    </div>
  );
}

export default App;
