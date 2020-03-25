var numarTask = 1;
function adaugareTask(){
  var task = $('#task').val();
  var eUrgent = $('#urgent').is(':checked');
  var divClass = "card";
  if (eUrgent){
    divClass+=" alert-danger ";
  }
  $('#lista').append(`
    <div class="` + divClass +`" id="`+ numarTask +`">
      <div class="card-body">
        <div class="card-body">
          <h5>` + task + `</h5>
        </div>
      </div>
      <div class="card-footer text-muted">
        <a href="#" class="btn btn-danger" onclick="return stergereTask(`+ numarTask +`);"><i class="las la-trash"></i></a>
      </div>
    </div>`)
    ++numarTask;
  return false;
}

function stergereTask(idTask){
  $('#'+ idTask).remove();
  return false;
}
