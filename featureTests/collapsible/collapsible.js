// this script will be for calling custom code



document.getElementById("create-hazard").addEventListener("click", addHazard);



function addHazard () {
  var hazardList = document.getElementById('hazardList');
  var hazardTitle = 'Fire';
  var hazardBody = 'additional info or meta data';

  var newHazard = '<li class="collection-item avatar">'+
    '<i class="material-icons circle orange">warning</i>'+
    '<span class="title">' +
    hazardTitle + 
    '</span>' +
    '<p> <br>' + 
    hazardBody + 
    '</p> <a onclick="deleteHazard(this.parentElement)" ' + //pass the parent LI element to be deleted on click
    'class="secondary-content waves-effect waves-red btn-flat" title="Delete Hazzard">' +
    '<i class="material-icons">delete</i>' +
    '</a></li>';

  hazardList.innerHTML += newHazard;


  //   hazardList.createElement('Li');
  //	 innerHTML(newHazard); 
}


//when the delete button is clicked,
//the associated LI element is removed
function deleteHazard(child) {
    child.parentElement.removeChild(child);
}
