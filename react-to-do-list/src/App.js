import React, { useState } from "react";
import InputText from "./components/InputText";
import ToDoList from "./components/ToDoList";
import ElementsFilter from "./components/ElementsFilter";
import './css/App.css'

function App() {

  const [filterIndex, setFilterIndex] = useState(0);

  function onTitleChanged(value) {
    if (value === "") {
      alert("Please add new title first");
      return false;
    }
    document.title = value;
    return true;
  }

  function onFilterIndexChanged(index) {
    setFilterIndex(index);
  }

  return (
    <div className="App">
      <InputText onButtonClick={onTitleChanged} buttonTitle="Change" title="Set New Title"/>
      <ElementsFilter onFilterIndexChanged={onFilterIndexChanged}/> 
      <ToDoList filterIndex={filterIndex}/>
        
    </div>
  );
}

export default App;
