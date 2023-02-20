var taskIndex = 0;
var selectionIndex = -1;

function init() {
    addNewTask("task 1");
    addNewTask("task 2");
    addNewTask("task 233");
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
            if (element.childNodes.length >= 3 && element.childNodes[3] == item) {
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
    checkboxElem.setAttribute("id", "item-checkbox-" + taskIndex);
    checkboxElem.setAttribute("class", "item-checkbox");

    var labelElem = document.createElement("label");
    labelElem.setAttribute("for", "item-checkbox-" + taskIndex);
    labelElem.setAttribute("id", "item-label");

    var redCross = document.createElement("img");
    redCross.setAttribute("id", "red-cross");
    redCross.setAttribute("onclick", "removeItem(this)");
    redCross.setAttribute("src", "img/red-cross.png");

    var li = document.createElement("li");
    li.appendChild(checkboxElem);
    li.appendChild(labelElem);
    li.appendChild(document.createTextNode(text));
    li.appendChild(redCross);
    li.setAttribute("id", taskIndex);
    li.setAttribute("draggable", "true");
    li.setAttribute("class", "item-container");
    console.log("Added task : " + taskIndex);
    taskIndex++;

    itemList.appendChild(li);
}

document.addEventListener('keydown', (event) => {
    var code = event.code

    console.log("code : " + code);
    if (code == "ArrowDown") {
        selectionIndex++;
        handleSelection();
    } else if (code == "ArrowUp") {
        selectionIndex--;
        handleSelection();
    } else if (code == "Space") {
        setCheckedBySelection();
    }

  }, false);

  document.addEventListener('mousedown', (event) => {
    selectionIndex = -1;
    var itemList = document.getElementById("item-list");
    for(i = 0; i < itemList.childNodes.length; i++) {
        itemList.childNodes[i].style.background = 'transparent';
    }
  }, false);

  function handleSelection() {
    var itemList = document.getElementById("item-list");
    if (selectionIndex < 0) {
        selectionIndex = 0;
    } else if (selectionIndex >= itemList.childNodes.length) {
        selectionIndex = itemList.childNodes.length - 1;
    }

    for(i = 0; i < itemList.childNodes.length; i++) {
        itemList.childNodes[i].style.background = (i == selectionIndex ? '#A0A0A0' : 'transparent');
    }
  }

  function setCheckedBySelection() {
    var itemList = document.getElementById("item-list");
    var element = itemList.childNodes[selectionIndex];
    element.childNodes[0].checked = !element.childNodes[0].checked;
  }
