import React, { useState } from "react";
import deleteItem from "../img/delete.png"
import editItem from "../img/edit.png"
import './../css/ToDoItem.css'
import './../css/ToDoItemImg.css'
import './../css/ToDoItemCheckbox.css'

const ToDoItem = (props) => {

    //const [checked, setChecked] = useState(props.checked);
    const checkboxId = "item-checkbox-" + props.title;

    function deleteItem() {
        if (window.confirm("Are you sure you want to remove this task?")) {
            props.onDelete(props.title);
        }
    }

    function editItem() {

    }

    console.log("ToDoItem title: " + props.title + ", checked: " + props.checked);

return (
    <div className="ToDoItem">
        <input className="item-checkbox"
            type="checkbox"
            checked={props.checked}
            id={checkboxId}
            onChange={value => {
                props.onCheckedChange(props.title);
            }}>
        </input>
        <label for={checkboxId}></label>
        <p className="TaskTitle">{props.title}</p>
        <img className="EditItem" onClick={() => editItem()}/>
        <img className="DeleteItem" onClick={() => deleteItem()}/>
    </div>
);

};

export default ToDoItem;