import React, { useState, useRef} from "react";
import ToDoItem from "./ToDoItem";
import './../css/ToDoList.css'
import InputText from "./InputText";

class ToDoItemModel {

    constructor(id, checked, title) {
        this.id = id;
        this.checked = checked;
        this.title = title;
    }

    setChecked(checked) {
        this.checked = checked;
    }
}

const ToDoList = (props) => {

    const [id, setId] = useState(3);
    const [ items, setItems ] = useState([
        new ToDoItemModel(0, false, "Item1"),
        new ToDoItemModel(1, false, "Item12345"),
        new ToDoItemModel(2, false, "Item123")
    ]);


    function addNewTask(title) {
        if (title === "") {
            alert("Please add task title");
            return false;
        }

        if (items.filter(item => title === item.title).length > 0) {
            alert("This task is exist already");
            return false; 
        }
        console.log("Added item " + title);
        setItems([...items, new ToDoItemModel(id, false, title)]);
        setId(id + 1);
        return true;
    }
    
    function onDelete(id) {
        let newItems = items.filter(item => item.id != id);
        setItems([...newItems]);
    }

    function onCheckedChange(id) { 
        let item = items.filter(item => item.id == id).at(0);
        item.setChecked(!item.checked);
        setItems([...items]);
    }


    return (
    <div className="ToDoList">
      <InputText onButtonClick={addNewTask} buttonTitle="Add" title="Add New Task"/>
      <ul className="ListContainer">{items.filter(item => {
        return props.filterIndex == 0 || props.filterIndex > 0 && item.checked || props.filterIndex < 0 && !item.checked})
        .map(item => {
            console.log("Element : " + item.title + " id = " + item.id + ", checked = " + item.checked);
            return <li>
                <ToDoItem checked={item.checked} itemId={item.id}  key={item.id} title={item.title} onDelete={onDelete} onCheckedChange={onCheckedChange}/>
               </li>;
        }
      )}</ul>
    </div>
);

};

export default ToDoList;