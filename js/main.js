var taskList = [];


var Task = function(text) {
    this.text = text;
    this.date = new Date();
    this.done = false;
}



var Elements = function() {

    this.row = document.createElement("div"); // creates the boostrap row

    this.row.className = "row"; // assigns the classs row

    this.col8 = document.createElement("div"); // creates the col to hold the content 8

    this.col8.className = "col-xs-6"; // assigns the classs for the col



    this.col2Date = document.createElement("div"); // creates the col to hold the the date

    this.col2Date.className = "col-xs-4"; // assigns the classs for the col for the date

    this.col2Input = document.createElement("div"); // creates the col to hold the tick box

    this.col2Input.className = "col-xs-2"; // assigns the classs for the col that holds the input


    this.input = document.createElement("input"); // creates an input element

    this.input.type = "checkbox"; // sets the inputs type to checkbox

    this.input.checked = false; // sets the inputs checked to a boolean which can be checked

    this.col2Input.appendChild(this.input); // inserts the element into the div that will hold it



    this.li = document.createElement("li")

    this.row.className = "itemWrapper";

    this.textP = document.createElement("p");

    this.textP.className = "info"

    this.dateP = document.createElement("p");


    // creates a list element <script src="js/vendor/jquery-3.1.1.min.js"></script>

    /*
<li>  <script src="js/vendor/bootstrap.js"></script>
    <div class="row">
        <div class="col-xs-6">

        </div>

        <div class="col-xs-4">
        </div>
        <div class="col-xs-2">
            <input type="checkbox" />
        </div>
    </div>
</li>
    */

    this.row.appendChild(this.col8);

    this.row.appendChild(this.col2Date);

    this.row.appendChild(this.col2Input);

    this.li.appendChild(this.row); // inserts the row into li


}


var addbtn = document.getElementById("addTask");

var ul = document.getElementById("list")


function createTask(tasktext) {
    // Need to refractor and change the css as welll as the do speed benchmark test. Also create a new branch. Add a new class fot the p elemetns and the css appploie s to evert single one of the elemetens

    var task = new Task(tasktext); // create the task

    var el = new Elements(); // creates the Elements

    var newContent = document.createTextNode(task.text);

    el.textP.appendChild(newContent);

    el.dateP.appendChild(document.createTextNode(task.date.getDate() + "/" + task.date.getMonth() + "/" + task.date.getFullYear()));;

    //console.log(el.li.childNodes[0].childNodes)

    el.li.childNodes[0].childNodes[0].appendChild(el.textP);

    el.li.childNodes[0].childNodes[1].appendChild(el.dateP);

    console.log(ul.childNodes.length);

    //console.log(el.li);


    ul.appendChild(el.li);


    //console.log(el.li.childNodes[0].childNodes)



    /*
        el.extraDiv.appendChild(date);

        el.li.appendChild(newContent);

        el.li.appendChild(el.extraDiv);

        el.div.appendChild(el.li);
        list.appendChild(el.div);
        */

}

function addTask() {

    var taskInput = document.getElementById("taskInput").value;


    if (taskInput == false) {
        return null;
    } else {
        createTask(taskInput);
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

/*
    var arr = [];

    ul.childNodes.forEach(function(e) {

        if (e.nodeType == Node.ELEMENT_NODE)
            arr.push(e);

        //console.log(e.childNodes);


    })

    //console.log(arr);

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].childNodes.values());
    }
*/
//console.log(e);*/

//console.log(ul.children)

/*
    el.childNodes.forEach(function(e) {
        if (e.childNodes[1].childNodes[0].checked == true) {
            e.parentNode.parentNode.removeChild(e.parentNode)
        }

    })*/






document.addEventListener('DOMContentLoaded', function() {
    addbtn.addEventListener("click", function() {
        if (addTask() === null) {
            console.log("fuck");
        };
    });



    ul.addEventListener("change", function() {
        //console.log("Updated");
        deleteTask();
    });

});;
