var taskList = [];


function Task(text) {
    this.text = text;
    this.date = new Date();
    this.done = false;
}

var taskInput = document.getElementById("taskInput");

var list = document.getElementById("list");


list.addEventListener
