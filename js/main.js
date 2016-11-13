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

  this.extraDiv = document.createElement("div");
}


var addbtn = document.getElementById("addTask");

var ul = document.getElementById("list");


var today = new Date();

//
//var o = today.getDate() +"/"+ today.getMonth() + "/" + today.getFullYear();

//console.log(o);

function addTask() {



    var taskInput = document.getElementById("taskInput").value;
    var list = document.getElementById("list");

    if (taskInput == false){
      return null;
    }
    else {

      var task = new Task(taskInput);

      //console.log(task.text);

      var el = new Elements();

      el.input.type = "checkbox";
      var o = today.getDate() +"/"+ today.getMonth() + "/" + today.getFullYear();

      el.div.className = "itemWrapper text-center";

      el.extraDiv.className = "otherInfo";



      el.extraDiv.appendChild(el.input);



      var newContent = document.createTextNode(task.text)

      var newDate = document.createTextNode(o);

        el.extraDiv.appendChild(newDate);

      el.li.appendChild(newContent);

      //el.li.appendChild(newDate);

      el.li.appendChild(el.extraDiv);


/*
      el.li.appendChild(el.input);

      ;


*/el.div.appendChild(el.li);
      list.appendChild(el.div);

    }

}



document.addEventListener('DOMContentLoaded', function() {
    addbtn.addEventListener("click", function() {
        if(addTask() === null) {
          console.log("fuck");
                };


    });

    ul.addEventListener("change", function() {
        console.log("Updated");
    });



});
