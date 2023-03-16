import React, { useState, useEffect} from "react";
import axios from 'axios'
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

    const maxCount = 15;
    const [id, setId] = useState(0);
    const [ items, setItems ] = useState([]);

    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
      });

      useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = 'https://dummyjson.com/todos?limit=10&skip=0';
        axios.get(apiUrl).then((repos) => {
          const allRepos = repos.data;
          setAppState({ loading: false, repos: allRepos });
          onGetItems(allRepos);
        });
      }, [setAppState]);


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
        axios.post('https://dummyjson.com/todos/add', {
            todo: title,
            completed: false,
            userId: 5
        }).then((repo) => {
            let remoteItem = repo.data;
            let index = remoteItem.id > maxCount ? id : remoteItem.id;
            let title = remoteItem.todo;
            let checked = remoteItem.completed;
            let item = new ToDoItemModel(index, checked, title);
            
            setItems([...items, item]);
            localStorage.setItem('id' + index, index); 
            localStorage.setItem('title' + index, title); 
            localStorage.setItem('checked' + index, false);
            setId(index + 1 > maxCount ? 0 : index + 1);
        });

        return true;
    }
    
    function onDelete(id) {
        axios.delete('https://dummyjson.com/todos/' + id)
        .then((repo) => {
            let remoteItem = repo.data;
            let newItems = items.filter(item => item.id != remoteItem.id);
            setItems([...newItems]);
            saveItems(newItems);
        });
    }

    function onCheckedChange(id) {
        axios.patch('https://dummyjson.com/todos/' + id, {
            completed: true
        })
        .then((repo) => {
            let remoteItem = repo.data;
            let item = items.filter(item => item.id == remoteItem.id).at(0);
            item.setChecked(!item.checked);
            localStorage.setItem('checked' + item.id, item.checked);
            setItems([...items]);
        }); 
    }

    function onEditChange(id, title) {
        axios.patch('https://dummyjson.com/todos/' + id, {
            todo: title
        })
        .then((repo) => {
            let remoteItem = repo.data;
            let item = items.filter(item => item.id == remoteItem.id).at(0);
            item.setTitle(title);
            localStorage.setItem('title' + item.id, item.title); 
            setItems([...items]);
        }); 
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

    function onGetItems(serverData) {
        console.log('onGetItems');
        let newItems = [];
        let remoteItems = [];
        //load local data
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
        //load server data
        let remoteTodos = serverData.todos;
        remoteTodos.forEach(todo => {
            let id = todo.id;
            let title = todo.todo;
            let checked = todo.completed;
            let item = new ToDoItemModel(id, checked, title);
            console.log("Push remote item : " + item.title + " id = " + item.id + ", checked = " + item.checked);
            remoteItems.push(item);
        });
        let combineItems = [];
        let remotePriority = window.confirm("Do you want to use remote ToDos?");
        for (let i = 0; i <= maxCount; i++) {
            let localItem = newItems.filter(item => item.id == i).at(0);
            let remoteItem = remoteItems.filter(item => item.id == i).at(0);
            if (localItem != undefined && remoteItem != undefined) {
                if (remotePriority) {
                    combineItems.push(remoteItem);
                } else {
                    combineItems.push(localItem);
                }
            } else if (localItem != undefined) {
                combineItems.push(localItem);
            } else if (remoteItem != undefined) {
                combineItems.push(remoteItem);
            }
        }
        setItems([...combineItems]);
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
                    onDelete={onDelete} onCheckedChange={onCheckedChange} onEditChange={onEditChange}
                        selectedText={props.selectedText}/>
               </li>;
        }
      )}</ul>
    </div>
);

};

export default ToDoList;