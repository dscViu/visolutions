// this script will be for calling custom code



document.getElementById("button1").addEventListener("click",addHazard);



function addHazard () {
  var hazardList = document.getElementById('hazardList');
  var haz1 = 'fire';
  var haz2 = 'electricity';

  var newHazard = '<li class="collection-item avatar">'+
    '<i class="material-icons circle orange">warning</i>'+
    '<span class="title">' +
    haz1 +
    '</span>'+
    '<p>'+
    haz2 + 
    '<br> Second Line </p>'+
    '<a nohref="" class="secondary-content">'+
    '<i class="material-icons">check</i></a></li>';

  hazardList.innerHTML += newHazard;


  //     hazardList.createElement('Li');
  //	 innerHTML(newHazard); 
}
