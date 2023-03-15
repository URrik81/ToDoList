import React, { useState } from "react";
import InputText from "./components/InputText";
import ToDoList from "./components/ToDoList";
import ElementsFilter from "./components/ElementsFilter";
import './css/App.css'

function App() {

  const [filterIndex, setFilterIndex] = useState(0);
  const [isSorted, setSorted] = useState(false);

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

  function onSortByTitle(isSorted) {
    setSorted(isSorted);
  }

  function onFindItems(text) {
    
  }

  return (
    <div className="App">
      <InputText onButtonClick={onTitleChanged} buttonTitle="Change" title="Set New Title"/>
      <ElementsFilter onFilterIndexChanged={onFilterIndexChanged} onSortByTitle={onSortByTitle} onFindItems={onFindItems}/> 
      <ToDoList filterIndex={filterIndex} isSorted={isSorted}/>
        
    </div>
  );
}

export default App;
