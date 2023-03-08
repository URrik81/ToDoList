import React, { useState } from "react";
import deleteItem from "../img/delete.png"
import editItem from "../img/edit.png"
import './../css/ToDoItem.css'
import './../css/ToDoItemImg.css'

const ToDoItem = (props) => {

    const [checked, setChecked] = useState(false);

    function deleteItem() {
        if (window.confirm("Are you sure you want to remove this task?")) {
            props.onDelete(props.title);
        }
    }

    function editItem() {

    }

return (
    <div className="ToDoItem">
        <input 
            type="checkbox"
            value={checked}
            id="item-checkbox"
            onChange={setChecked}>
        </input>
        <label htmlFor="item-checkbox"></label>
        <p className="TaskTitle">{props.title}</p>
        <img className="EditItem" onClick={() => editItem()}/>
        <img className="DeleteItem" onClick={() => deleteItem()}/>
    </div>
);

};

export default ToDoItem;