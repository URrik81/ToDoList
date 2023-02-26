import React, { useState } from "react";
import ToDoList from "./ToDoList";
import cross from "../img/red-cross.png"
import './../styles/ToDoItem.css'

const ToDoItem = (props) => {

    const [checked, setChecked] = useState(false);
    /*function onRemove() {
        if (confirm("Are you sure you want to remove this task?")) {
            var itemList = document.getElementById("item-list");
            for(i = 0; i < itemList.childNodes.length; i++) {
                var element = itemList.childNodes[i];
                if (element.childNodes.length >= 3 && element.childNodes[3] == item) {
                    itemList.removeChild(itemList.childNodes[i]);
                    taskIndex--;
                    return;
                }
            } 
        }
      }//*/
return (
    <div className="ToDoItem">
        <input 
            type="checkbox"
            value={checked}
            id="item-checkbox"
            onChange={setChecked}>
        </input>
        <label for="item-checkbox"></label>
        <p>{props.title}</p>
        <img src={cross}/>
    </div>
);

};

export default ToDoItem;