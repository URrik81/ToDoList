import React, { useState, useRef } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {

    const ref = useRef(null);
    const [index, setIndex] = useState(0);
    const [ items, setItems ] = useState([]);
    const [ input, setInput ] = useState('');

    function addItem(title) {
        
        setIndex(index + 1);
    }
    
    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleClick() {
      setItems([...items, <ToDoItem title={input}/>]);
      setInput('');
      ref.current.focus();
    }

return (
    <div>
        <input
        ref={ref}
        onChange={handleChange}
        value={input}
      />
      <button onClick={handleClick}>Add new task</button>
      <ul>{items.map(item => <li>{item}</li>)}</ul>
    </div>
);

};

export default ToDoList;