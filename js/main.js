var taskList = [];


var Task = function(text) {
    this.text = text;
    this.date = new Date();
    this.done = false;
}



var Elements = function() {

    // creates the necessary element
    this.row = document.createElement("div"); // creates the boostrap row

    this.col8 = document.createElement("div"); // creates the col to hold the content 8

    this.col4Date = document.createElement("div"); // creates the col to hold the the date

    this.col2Input = document.createElement("div"); // creates the col to hold the tick box

    this.input = document.createElement("input"); // creates an input element

    this.li = document.createElement("li") // creates the li element to nest to the div

    this.textP = document.createElement("p"); // creates a text element to hold the task text itself

    this.dateP = document.createElement("p"); // creates a text element to hold the date from the task's date

    // Sets the className

    this.row.className = "row"; // assigns the classs row

    this.col8.className = "col-xs-6"; // assigns the classs for the col

    this.col4Date.className = "col-xs-4"; // assigns the classs for the col for the date

    this.col2Input.className = "col-xs-2"; // assigns the classs for the col that holds the input

    this.row.className = "itemWrapper"; // sets the class for the row

    this.textP.className = "info" // sets the class of the textP element to other element

    // Sets up the input button

    this.input.type = "checkbox"; // sets the inputs type to checkbox

    this.input.checked = false; // sets the inputs checked to a boolean which can be checked

    this.col2Input.appendChild(this.input); // inserts the element into the div that will hold it

    // sets up the structure

    /*

    <li>
     <div class= "row">

       <div class = "col-xs-8">
         </div>

       <div class = "col-xs-4">
          </div>

        <div class = "col-xs-2">
          </div>
        </div>
    </li>

    */

    this.row.appendChild(this.col8); // appends the div with a class of col8 into the row

    this.row.appendChild(this.col4Date); // appends the div with a class of col4 into the row

    this.row.appendChild(this.col2Input); // appends the div woth a class of col2 into the row

    this.li.appendChild(this.row); // inserts the row into li element

}





function createTask(tasktext, list) {

    var task = new Task(tasktext); // create the task

    var el = new Elements(); // creates the Elements

    var taskText = document.createTextNode(task.text); // a var to hold the text for the task

    var date = task.date.toLocaleTimeString() + " on the " + task.date.getDate() + "/" + task.date.getMonth() + "/" + task.date.getFullYear(); // creaets a string that will hold the time that task was created

    el.textP.appendChild(taskText); // appends the taskText to

    el.dateP.appendChild(document.createTextNode(date));

    el.li.childNodes[0].childNodes[0].appendChild(el.textP);

    el.li.childNodes[0].childNodes[1].appendChild(el.dateP);

    list.appendChild(el.li);

}

function addTask(list) {

    var taskInput = document.getElementById("taskInput").value;

    if (taskInput == false) {
        return null;
    } else {
        createTask(taskInput, list);
    }

}


function deleteTask() {

    var inputs = document.querySelectorAll('input[type=checkbox]');


    for (var item of inputs) {

        if (item.checked == true) {

            var u = document.getElementById('list');

            var father = item.parentNode.parentNode.parentNode;

            u.removeChild(father);

        }
    }

}


document.addEventListener('DOMContentLoaded', function() {

    var addbtn = document.getElementById("addTask");

    var ul = document.getElementById("list");

    addbtn.addEventListener("click", function() {
        if (addTask(ul) === null) {
            console.log("fuck");
        };
    });



    ul.addEventListener("change", function() {
        //console.log("Updated");
        deleteTask();
    });

});;
