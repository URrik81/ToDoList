import React, { useState, useEffect} from "react";
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

    setTitle(title) {
        this.title = title;
    }
}

const ToDoList = (props) => {

    const maxCount = 10;
    const [id, setId] = useState(0);
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        onGetItems();
      }, []);


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
        localStorage.setItem('id' + id, id); 
        localStorage.setItem('title' + id, title); 
        localStorage.setItem('checked' + id, false);
        setId(id > maxCount ? 0 : id + 1);
        return true;
    }
    
    function onDelete(id) {
        let newItems = items.filter(item => item.id != id);
        setItems([...newItems]);
        saveItems(newItems);
    }

    function onCheckedChange(id) { 
        let item = items.filter(item => item.id == id).at(0);
        item.setChecked(!item.checked);
        localStorage.setItem('checked' + item.id, item.checked);
        setItems([...items]);
    }

    function onEditChange(id, title) { 
        let item = items.filter(item => item.id == id).at(0);
        item.setTitle(title);
        localStorage.setItem('title' + item.id, item.title); 
        setItems([...items]);
    }

    function saveItems(newItems) {
        localStorage.clear();
        newItems.forEach(item => {
            console.log("Save item : " + item.title + " id = " + item.id + ", checked = " + item.checked);
            localStorage.setItem('id' + item.id, item.id); 
            localStorage.setItem('title' + item.id, item.title); 
            localStorage.setItem('checked' + item.id, item.checked);

        });
    }

    function onGetItems() {
        console.log('onGetItems');
        let newItems = [];
        for (let i = 0; i <= maxCount; i++) {
            let id = localStorage.getItem('id' + i);
            if (id == undefined) {
                continue;
            }
            let title = localStorage.getItem('title' + i);
            let checked = localStorage.getItem('checked' + i);
            let item = new ToDoItemModel(id, checked == 'true', title);
            console.log("Push item : " + item.title + " id = " + item.id + ", checked = " + item.checked);
            newItems.push(item);
            setId(i > maxCount ? 0 : i + 1);
        }
        setItems([...newItems]);
    }

    return (
    <div className="ToDoList">
      <InputText onButtonClick={addNewTask} buttonTitle="Add" title="Add New Task"/>
      <ul className="ListContainer">{items.filter(item => {
        return props.filterIndex == 0 || props.filterIndex > 0 && item.checked || props.filterIndex < 0 && !item.checked})
        .sort(function (a, b) {
            return props.isSorted ? a.title.localeCompare(b.title) : 1;
        })
        .map(item => {
            console.log("Element : " + item.id + " title = " + item.title + ", checked = " + item.checked);
            return <li>
                <ToDoItem checked={item.checked} itemId={item.id}  key={item.id} title={item.title} 
                    onDelete={onDelete} onCheckedChange={onCheckedChange} onEditChange={onEditChange}/>
               </li>;
        }
      )}</ul>
    </div>
);

};

export default ToDoList;