var taskList = [];


var Task = function(text) {
    this.text = text;
    this.date = new Date();
    this.done = false;
}



var Elements = function() {
  this.div = document.createElement("li"); // div in html;

  this.li = document.createElement("div"); // <li> in html

  this.input =  document.createElement("input");  // <input> in html;
}


var addbtn = document.getElementById("addTask");

var ul = document.getElementById("list");


//console.log(el.div);

function addTask() {

    var taskInput = document.getElementById("taskInput").value;

    var list = document.getElementById("list");


    var task = new Task(taskInput);

    console.log(task.text);


    var el = new Elements();





    el.input.type = "checkbox";



    el.div.className = "itemWrapper text-center";



    var newContent = document.createTextNode(task.text)

    el.li.appendChild(newContent);

    el.li.appendChild(el.input);



    el.div.appendChild(el.li);

    list.appendChild(el.div);

}



document.addEventListener('DOMContentLoaded', function() {
    addbtn.addEventListener("click", function() {
        addTask();
    });

    ul.addEventListener("change", function() {
        console.log("Updated");
    });



});
