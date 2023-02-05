var taskIndex = 0;

function init() {
    addNewTask("task 1");
    addNewTask("task 2");
    addNewTask("task 3");
}

function removeAllItems() {
    var itemList = document.getElementById("item-list")
    if (confirm("Are you sure you want to remove all tasks?")) {
            itemList.innerHTML = "";
            taskIndex = 0;
    } 
}

function removeItem(item) {  
    if (confirm("Are you sure you want to remove this task?")) {
        var itemList = document.getElementById("item-list");
        for(i = 0; i < itemList.childNodes.length; i++) {
            var element = itemList.childNodes[i];
            if (element.childNodes.length >= 3 && element.childNodes[2] == item) {
                itemList.removeChild(itemList.childNodes[i]);
                taskIndex--;
                return;
            }
        } 
    } 
}

function removeFinishedTasks() {
    if (confirm("Are you sure you want to remove all finished tasks?")) {
        var itemList = document.getElementById("item-list");
        for(i = itemList.childNodes.length - 1 ; i >= 0 ; i--) {
            var element = itemList.childNodes[i];
            if (element.childNodes.length < 3) {
                continue;
            }
            var isChecked =  element.childNodes[0].checked;
            if (isChecked) {
                itemList.removeChild(element);
            }
        }
    }
}

function filterTasks() {
    var selectionFilter = document.getElementById("selection-filter").value;
    var itemList = document.getElementById("item-list");
    for(i = 0; i < itemList.childNodes.length; i++) {
        var element = itemList.childNodes[i];
        if (element.childNodes.length < 3) {
            continue;
        }
        var isChecked =  element.childNodes[0].checked;
        if (isChecked && selectionFilter >= 0 
            || !isChecked && selectionFilter <= 0 ) {
                element.removeAttribute("hidden");
        } else {
            element.setAttribute("hidden", "hidden");
        }
    }
}

function changeTitle() {
    var inputField = document.getElementById("change-title")
    if (inputField.value == "") {
        alert("Please add new title first");
        return;
    }
    document.title = inputField.value;
}

function createNewTask() {
    var inputField = document.getElementById("add-task")
    if (inputField.value == "") {
        alert("Please add your task first");
        return;
    }
    addNewTask(inputField.value);
}

function addNewTask(text) {  
    var itemList = document.getElementById("item-list")

    var checkboxElem = document.createElement("input");
    checkboxElem.setAttribute("type", "checkbox");
    checkboxElem.setAttribute("id", "item-checkbox");

    var redCross = document.createElement("img");
    redCross.setAttribute("id", "red-cross");
    redCross.setAttribute("onclick", "removeItem(this)");
    redCross.setAttribute("src", "img/red-cross.png");

    var li = document.createElement("li");
    li.appendChild(checkboxElem);
    li.appendChild(document.createTextNode(text));
    li.appendChild(redCross);
    li.setAttribute("id", taskIndex);
    li.setAttribute("draggable", "true");
    li.setAttribute("class", "item-container");
    console.log("Added li : " + taskIndex);
    taskIndex++;

    itemList.appendChild(li);
}