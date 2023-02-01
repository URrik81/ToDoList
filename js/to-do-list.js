
function changeTitle() {
    var inputField = document.getElementById('change-title')
    if (inputField.value == "") {
        alert("Please add new title first");
        return;
    }
    document.title = inputField.value;
}

function createNewTask() {
    var inputField = document.getElementById('add-task')
    if (inputField.value == "") {
        alert("Please add your task first");
        return;
    }
    var text = inputField.value;
    
    var checkboxElem = document.createElement("input");
    checkboxElem.setAttribute("type", "checkbox");
    checkboxElem.setAttribute("id", "item-checkbox");

    var li = document.createElement("li");
    li.appendChild(checkboxElem);
    li.appendChild(document.createTextNode(text));
    li.setAttribute("id", "item-container");

    var itemList = document.getElementById('item-list')
    itemList.appendChild(li);
    alert("Added task : " + inputField.value);
}