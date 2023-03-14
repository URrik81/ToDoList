import React, { useState } from "react";
import deleteItem from "../img/delete.png"
import editItem from "../img/edit.png"
import './../css/ToDoItem.css'
import './../css/ToDoItemImg.css'
import './../css/ToDoItemCheckbox.css'

const ToDoItem = (props) => {

    const checkboxId = "item-checkbox-" + props.title;

    function deleteItem() {
        if (window.confirm("Are you sure you want to remove this task?")) {
            props.onDelete(props.itemId);
        }
    }

    function editItem() {

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
        <p className="TaskTitle">{props.title}</p>
        <img className="EditItem" onClick={() => editItem()}/>
        <img className="DeleteItem" onClick={() => deleteItem()}/>
    </div>
);

};

export default ToDoItem;