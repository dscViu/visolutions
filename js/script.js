// this file is just for materialize javascript functions


// call side nav 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var dropDownOptions = {
    draggable: true
  }
  var instances = M.Sidenav.init(elems, dropDownOptions);
});


// call tool tips
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var dropDownOptions = {
    margin: 20,
    inDuration: 550,
    outDuration: 100
  }
  var instances = M.Tooltip.init(elems, dropDownOptions);
});
