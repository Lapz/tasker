var taskList = [];


var Task = function(text) {
    this.text = text;
    this.date = new Date();
    this.done = false;
}

var taskInput = document.getElementById("taskInput");

var list = document.getElementById("list");

function addTask(taskInfo, listItems) {

    var task = new Task(taskInfo);

    listItems.appendChild(task.text);

}

list.addEventListener("click", addTask(taskInput, list));
