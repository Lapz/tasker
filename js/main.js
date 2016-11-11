var workBook = [];

var globalIndex = 1;
function addNewWork() {
  task = {};
  task.title = document.getElementById('titleInput').value;
  task.description = document.getElementById('descriptionInput').value;
  task.index = globalIndex++;
  task.date = document.getElementById('datepicker').value;
  task.done = false;
  workBook.push(task);
}

/*
addNewWork();
addNewWork();
addNewWork();

*/
var bin;
function deleteTask(tableRow) {

  workBook = workBook.splice(tableRow, 1);
}

function reloadTable() {
  $('tbody').empty();
  for (var i = 0; i < workBook.length; i++) {
    var tr;
    tr = $('<tr id =' + workBook[i].index + '>');
    tr.append('<td>' + workBook[i].index + '</td>');
    tr.append('<td>' + workBook[i].title + '</td>');
    tr.append('<td>' + workBook[i].description + '</td>');
    tr.append('<td>' + workBook[i].date + '</td>');
tr.append(" <td> <div class='form-check'" + "id=taskNum" + workBook[i].index + ">" + "<button type='button' class='btn btn-danger'" + "id=taskRemove" + workBook[i].index + ">Finished Task</button></div> </td>");
    $('tbody').append(tr);
  };

};


$(document).ready(function() {
  $('#saveChanges').click(function() {

    addNewWork();
    reloadTable();



    // For deleting a Task will move  when Ajax implemented
    $('td').children().click(function() {

      var tableRowId = this.id;
      var match = tableRowId.replace(/\D/g,'');
      console.log(tableRowId);
      console.log(workBook);


      $('#'+tableRowId).click(function() {
        $('.alert').show().delay(800).fadeOut(400);
          reloadTable();
          deleteTask(match);
        });
    });
  });
});
