import React, { useState, useRef} from "react";
import ToDoItem from "./ToDoItem";
import './../css/ToDoList.css'
import InputText from "./InputText";

const ToDoList = (props) => {

    
    const ref = useRef(null);
    const [ items, setItems ] = useState([
          <ToDoItem key='0' title="item1" onDelete={onDelete}/>, 
          <ToDoItem key='1' title="item123" onDelete={onDelete}/>, <ToDoItem key='2' title="item12345" onDelete={onDelete}/>
          ]);

    function addNewTask(value) {
        console.log("Items : " + items);
        if (value === "") {
            alert("Please add task title");
            return false;
        }

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.props === undefined) {
                continue;
            }
            if (value === item.props.title) {
                alert("This task is exist already");
                return false; 
            }
        }
        console.log("Add item " + value);
        setItems([...items, <ToDoItem key={value} title={value} onDelete={onDelete}/>]);
        return true;
    }
    
    function onDelete(value) {
        console.log("Items : " + items);
        let newItems = items;
        let index = 0;
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.props === undefined) {
                continue;
            }
            if (value === item.props.title) {
                index = i;
                break;
            }
        }
        console.log("Remove item by index " + index);
        newItems.splice(index, 1);
        console.log("New items : " + newItems);
        setItems([newItems]);
        console.log("Updated items : " + items);

    }

    return (
    <div className="ToDoList">
      <InputText onButtonClick={addNewTask} buttonTitle="Add" title="Add New Task"/>
      <ul className="ListContainer" ref = {ref}>{items.map(item => <li>{item}</li>)}</ul>
    </div>
);

};

export default ToDoList;