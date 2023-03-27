import React, { useState } from "react";
import styles from './ToDoItem.module.scss'
import imageStyles from './ToDoItemImg.module.scss'
import checkBoxStyles from './ToDoItemCheckbox.module.scss'
import EditText from "../EditText/EditText";

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

    function goToLink(url) {
        window.location = url;
      }

return (
    <div className={styles.ToDoItem}>
        <input className={checkBoxStyles.itemCheckbox}
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
        <img className={imageStyles.EditItem} onClick={() => setEditMode(!editMode)}/>
        <img className={imageStyles.DeleteItem} onClick={() => deleteItem()}/>
    </div>
);
};

export default ToDoItem;