var taskList = [];


var Task = function(text) {
    this.text = text;
    this.date = new Date();
    this.done = false;
}


var addbtn = document.getElementById("addTask");

var ul = document.getElementById("list");

function addTask() {

    var taskInput = document.getElementById("taskInput").value;

    var list = document.getElementById("list");


    var task = new Task(taskInput);

    console.log(task.text);

    var liEl = document.createElement("li");

    var newContent = document.createTextNode(task.text)

    liEl.appendChild(newContent);

    list.appendChild(liEl);

}



document.addEventListener('DOMContentLoaded', function() {
    addbtn.addEventListener("click", function() {
        addTask();
    });

    ul.addEventListener("change", function() {
        console.log("Updated");
    });



});
