<script>
//force reload the page (ie: prevent cache for this page) 
function reloadThePage(){
    window.location.reload();
} 
</script>

<!-- Materialize Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

<script>
  //initializing Materialize 'select' elements
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });
  
  //on 'Submit'click 
  document.getElementById("button1").addEventListener("click",addNewOption);
  
  
  function addNewOption(){
    
    // get reference to select element
    var sel = document.getElementById('dropdown1');
    
    //printing whatever was selected in the dropdown
    console.log(sel.value); 
    
    // create new option element
    var opt = document.createElement('option');
    
    // get value from input field
    var newOption = document.getElementById("newOption").value;    

    //prevent empty dropdown option
    if (newOption != '') { 
      // create text node to add to option element (opt)
      opt.appendChild( document.createTextNode(newOption) );
       
      // add opt to end of select box (sel)
      sel.appendChild(opt); 
    }
     
    //RE-Initialize select 
    document.getElementById("dropdown1").selectedIndex = 0;
    M.FormSelect.init(dropdown1);
    
    //clear text input field
    document.getElementById("newOption").value = '';
  }
