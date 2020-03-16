
//force reload the page (ie: prevent cache for this page) 
function reloadThePage(){
    window.location.reload();
} 


//initialize collapsible
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });


  document.getElementById("button1").addEventListener("click",addHazard);



  function addHazard () {
  	var hazardList = document.getElementById('hazardList');
  	var haz1 = 'fire';
  	var haz2 = 'electricity';

  	var newHazard = '<li class="collection-item avatar">'+
  		'<img src="images/yuna.jpg" alt="" class="circle">'+
        '<span class="title">' +
        haz1 +
        '</span>'+
        '<p>'+
        haz2 + 
        '<br> Second Line </p>'+
        '<a href="#!" class="secondary-content">'+
        '<i class="material-icons">grade</i></a></li>';
    
    hazardList.innerHTML += newHazard;


//     hazardList.createElement('Li');
//	 innerHTML(newHazard); 


  }