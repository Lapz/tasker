var taskList = [];


var Task = function(text) {
    this.text = text;
    this.date = new Date();
    this.done = false;
}


var addbtn = document.getElementById("addTask");

function addTask(taskInfo, listItems) {



    var task = new Task(taskInfo);

    console.log(task.text);

    var newContent = document.createTextNode(task.text)

    listItems.appendChild(newContent);

}
document.addEventListener('DOMContentLoaded', function() {
    addbtn.addEventListener("click", function(taskInput, list) {

        var taskInput = document.getElementById("taskInput").value;

        var list = document.getElementById("list");


        var task = new Task(taskInput);

        console.log(task.text);

        var newContent = document.createTextNode(task.text)

        list.appendChild(newContent);


    });
})
