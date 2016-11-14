var taskList = [];


var Task = function(text) {
    this.text = text;
    this.date = new Date();
    this.done = false;
}



var Elements = function() {
    this.div = document.createElement("li"); // div in html;

    this.li = document.createElement("div"); // <li> in html

    this.input = document.createElement("input"); // <input> in html;

    this.extraDiv = document.createElement("div");

    this.input.type = "checkbox";

    this.input.checked = false;

    this.div.className = "itemWrapper text-center";

    this.extraDiv.className = "otherInfo";

    this.extraDiv.appendChild(this.input)
}


var addbtn = document.getElementById("addTask");

var ul = document.getElementById("list");


function createTask(tasktext) {

    var task = new Task(tasktext); // create the task

    var el = new Elements(); // creates the Elements

    var date = document.createTextNode(task.date.getDate() + "/" + task.date.getMonth() + "/" + task.date.getFullYear());

    var newContent = document.createTextNode(task.text)

    el.extraDiv.appendChild(date);

    el.li.appendChild(newContent);

    el.li.appendChild(el.extraDiv);

    el.div.appendChild(el.li);
    list.appendChild(el.div);

}

function addTask() {

    var taskInput = document.getElementById("taskInput").value;

    var list = document.getElementById("list");

    if (taskInput == false) {
        return null;
    } else {
        createTask(taskInput);
    }

}


function getIndex() {
    var ul = document.getElementById("list");

    ul.childNodes.forEach(function(el) {

        el.childNodes.forEach(function(e) {
            if (e.childNodes[1].childNodes[0].checked == true) {
                e.parentNode.parentNode.removeChild(e.parentNode)
            }

        })

    })
}



document.addEventListener('DOMContentLoaded', function() {
    addbtn.addEventListener("click", function() {
        if (addTask() === null) {
            console.log("fuck");
        };
    });

    ul.addEventListener("change", function() {
        console.log("Updated");
        getIndex();
    });

});
