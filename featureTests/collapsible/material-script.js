// this script is for calling the materialize functions only

//force reload the page (ie: prevent cache for this page) 
function reloadThePage(){
  window.location.reload();
} 

//initialize collapsible
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var options = {
    accordion: false 
  }
  var instances = M.Collapsible.init(elems, options);
});

// initialize floating action button
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var options = {
    toolbarEnabled: true
  }
  var instances = M.FloatingActionButton.init(elems, options);
});

