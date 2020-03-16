
//force reload the page (ie: prevent cache for this page) 
function reloadThePage(){
    window.location.reload();
} 


//initialize collapsible
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });