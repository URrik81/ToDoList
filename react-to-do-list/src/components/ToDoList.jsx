import React, { useState, useRef} from "react";
import ToDoItem from "./ToDoItem";
import './../css/ToDoList.css'
import InputText from "./InputText";

const ToDoList = (props) => {

    const ref = useRef(null);
    const [ items, setItems ] = useState([
          <ToDoItem checked={false} key='0' title="item1" onDelete={onDelete} onCheckedChange={onCheckedChange}/>, 
          <ToDoItem checked={true} key='1' title="item123" onDelete={onDelete} onCheckedChange={onCheckedChange}/>,
          <ToDoItem checked={false} key='2' title="item12345" onDelete={onDelete} onCheckedChange={onCheckedChange}/>
          ]);

    function isChecked(item) {

    }

    function addNewTask(value) {
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
        setItems([...items, <ToDoItem checked={false} key={value} title={value} onDelete={onDelete} onCheckedChange={onCheckedChange}/>]);
        return true;
    }
    
    function onDelete(value) {
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
        setItems(newItems);
    }

    function onCheckedChange(value) {   
        //let newItems = items;
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
        let oldItem = items.at(index);
        console.log("onCheckedChange for : " + value + ", oldValue : " + oldItem.props.checked);
        let item = <ToDoItem checked={!oldItem.props.checked} key={oldItem.props.key} title={oldItem.props.title} onDelete={onDelete} onCheckedChange={onCheckedChange}/>;
        items.fill(item, index, index+1);
        setItems([...items]);
    }


    return (
    <div className="ToDoList">
      <InputText onButtonClick={addNewTask} buttonTitle="Add" title="Add New Task"/>
      <ul className="ListContainer">{items.map(item => {
        let checked = item.props.checked;
        console.log("Element : " + item.props.title + " checked = " + checked);
        if (props.filterIndex > 0 && checked
            || props.filterIndex < 0 && !checked
            || props.filterIndex == 0) {
           return <li>{item}</li>;
        }
      })}</ul>
    </div>
);

};

export default ToDoList;