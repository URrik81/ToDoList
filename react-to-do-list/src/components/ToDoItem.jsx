import React, { useState } from "react";
import deleteItem from "../img/delete.png"
import editItem from "../img/edit.png"
import './../css/ToDoItem.css'
import './../css/ToDoItemImg.css'
import './../css/ToDoItemCheckbox.css'
import EditText from "./EditText";

const ToDoItem = (props) => {

    const checkboxId = "item-checkbox-" + props.itemId;
    const [editMode, setEditMode] = useState(false);

    function deleteItem() {
        if (window.confirm("Are you sure you want to remove this task?")) {
            props.onDelete(props.itemId);
        }
    }

    function onSaveTitle(title) {
        props.onEditChange(props.itemId, title);
        setEditMode(false);
    }

return (
    <div className="ToDoItem">
        <input className="item-checkbox"
            type="checkbox"
            checked={props.checked}
            id={checkboxId}
            onChange={value => {
                console.log("Before onCheckedChange Element : " + props.title + " id = " + props.itemId);
                props.onCheckedChange(props.itemId);
            }}>
        </input>
        <label for={checkboxId}></label>
        <EditText editMode={editMode} text={props.title} selectedText={props.selectedText} 
            onSave={title => onSaveTitle(title)}/>
        <img className="EditItem" onClick={() => setEditMode(!editMode)}/>
        <img className="DeleteItem" onClick={() => deleteItem()}/>
    </div>
);
        //<p className="TaskTitle">{props.title}</p>
};

export default ToDoItem;