/* 
  'server side'
   Private appscript code lives here 
   
   Will create an object with all values as properties of that object
   Then pass thos properties as an array to appendRow method

*/

//doGet: required fro web app. Must return text or HTML output 


//Spreadsheet to use
// NOTE: The ID is the URL as such: 
// https://docs.google.com/spreadsheets/d/the_ID_is_here
var id = "130NXD5xI5uYN-8ij1_RCY_-VLcy5o8U_c9-sneit7JE";  
var riskReg_ss = SpreadsheetApp.openById(id);
//select worsheet (tab) named Detailed
var detailed_ws = riskReg_ss.getSheetByName("Detailed");


//GLOBAL VARS 
//const headers = 

/*const headers = [
      "Hazard Id","Hazard Source", "Initial Review Date", "Location", "Sub-Location", "Activity", "Task",
       "Hazard Stage/ Occurrence", "Energy/ Harm Source", "Target",	"Energy/  Harm Transfer Exposure",	"# of Targets", 
       "Duration Energy/ Harm Exposure", "Frequency of Energy/ Harm Exposure", "Probability of Exposure", "Severity", "Fatality Factor"
 ];
*/

//include function used to insert other files dynamically via include call
//expect HTML file extension
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


function doGet() { 
  /*
    page to be rendered
  */
//  var page = HtmlService.createTemplateFromFile("energy_harm"); 
  var page = HtmlService.createTemplateFromFile("dynamicDropdown");  //DELETE THIS

  
  // spreadsheet named ranges
  // These variables can be called from the rendered page. 
  // ie: 'energy_harm.html' can use 'id.range'
  page.id_range = riskReg_ss.getRangeByName('ID');
  page.hazardStage_range = riskReg_ss.getRangeByName('HazardStage'); 
  page.srcEnergy_range = riskReg_ss.getRangeByName('Source_Energy'); 
  page.srcHarm_range = riskReg_ss.getRangeByName('Source_Harm'); 
  page.duration_range = riskReg_ss.getRangeByName('Duration'); 
  page.frequency_range = riskReg_ss.getRangeByName('Frequency'); 
  page.probability_range = riskReg_ss.getRangeByName('Probability'); 
  page.severity_range  = riskReg_ss.getRangeByName('Severity');
  
  //return dynamically loaded page
  return page.evaluate();
}


/*
  Helper function to get column index by Name:  
    .getDataRange() returns range with data.
    .getValues() returns the values in those ranges, stored as 2D array. 1 nested array = 1row.
    .shift() discards everything BUT the first value in the selection (ie: the 1st array/row), 
      effectively selecting ONLY the "headers row" here, discarding everything else.
    .indexOf() returns the array index of the matched value in the array
*/
function getColByName(name) {
  var headers = detailed_ws.getDataRange().getValues().shift();
  var colindex = headers.indexOf(name);
  return colindex+1;
}





//append function used to add data to sheet
function append(harmData){
  var dataRow = []; 

  //Dictionary that matches colNames to varNames  
  //Key: the actual column name in the sheet
  //Value: the user data collected from the form, to be inserted in sheet
  harmData_dict = 
  {
    "Hazard Source" : harmData.hazard_source, 
    "Hazard Stage/ Occurrence" : harmData.hazard_stage,
    "Energy/ Harm Source" : harmData.harmSrc,
    
    "Duration Energy/ Harm Exposure" : harmData.duration,
    "Frequency of Energy/ Harm Exposure" : harmData.frequency,
    "Probability of Exposure" : harmData.probability, 
    "Severity" : harmData.severity,
    
    "Energy/  Harm Transfer Exposure" : harmData.transferExposure, 
    "# of Targets" : harmData.numTargets,
    "Fatality Factor" :harmData.fatalityFactor
  };

  //Append to sheet: 
  //Use dictionary 'key' to find right column and insert the 'value' in that column
  //NB: empty array values are filled with 'null' which is treated as empty string 
  for(var key in harmData_dict) {
    //here getColByName(key) - 1 
    //since getColByName() returns 1 for col A and we want 0
    //since inserted row is based on an zero-indexed array [each element is one cell]
    var colIdx = getColByName(key) - 1 ; //get column index
    var val = harmData_dict[key]; //get matching value
    dataRow[colIdx] = val; //insert value in row array based on col idx
  }
  
  //Append array to sheet 
  detailed_ws.appendRow(dataRow);    
}



















/*


EVERYTHING BELOW IS NOT USED AND SHOULD BE DELETED 
___________________________________________________


*/



function anothertest(){ 
  Logger.log(headers);
}



//calling getColByName fct
function testgetColByName(){ 
  Logger.log(getColByName("Hazard Id"));
}


function input_to_sheet() {
  //object that will hold row values
  class Hazard { 
    constructor(){
      //hazard_id
      this.hazard_id;
      //sources of harm 
      this.hazard_src;
      this.hazard_stage;
      this.harm_src;
      this.harm_transfer;
      this.harm_duration;
      this.harm_frequency ;
      this.harm_probability;
      this.harm_severity; 
      this.fatality_factor;
      this.task;
      this.activity;
      //targets
      this.target;
      this.location;
      this.sub_location;
      this.nb_of_targets;
      //culture / IBC
      this.controls
    }  
  } //class def
  
  
  //open spreadsheet by id 
  var id = "130NXD5xI5uYN-8ij1_RCY_-VLcy5o8U_c9-sneit7JE";  
  var riskReg_ss = SpreadsheetApp.openById(id);
  //select worsheet (tab) named Detailed
  var detailed_ws = riskReg_ss.getSheetByName("Detailed");
  
  
  
//  detailed_ws.appendRow(
  
 // var headers = 
 //     ["Hazard Id","Hazard Source", "Initial Review Date", "Location", "Sub-Location", "Activity", "Task",
 //      "Hazard Stage/ Occurrence", "Energy/ Harm Source", "Target",	"Energy/  Harm Transfer Exposure",	"# of Targets", 
 //      "Duration Energy/ Harm Exposure", "Frequency of Energy/ Harm Exposure", "Probability of Exposure", "Severity", "Fatality Factor"
 //    ];
 
  
  
  /*
  testHzrd = new Hazard();
  testHzrd.harm_src = "car";
  testHzrd.target = "justin Bieber";
  testHzrd.controls = "common sense";
  */
  
  //detailed_ws.appendRow([testHzrd.harm_src, testHzrd.target, testHzrd.controls]);  
}


function hazards_input(){
  Logger.log("Trying to input hazards"); 
  var id = "130NXD5xI5uYN-8ij1_RCY_-VLcy5o8U_c9-sneit7JE";
  var riskReg_ss = SpreadsheetApp.openById(id);
  var detailed_ws = riskReg_ss.getSheetByName("Detailed");
  //var url = "https://docs.google.com/spreadsheets/d/130NXD5xI5uYN-8ij1_RCY_-VLcy5o8U_c9-sneit7JE/edit#gid=229115245";
  //var riskReg_ss = SpreadsheetApp.openByUrl(url);
  //var detailed_ws = riskReg_ss.getSheetByName("Detailed");
  
  detailed_ws.appendRow(["hazard_TEST", "ELECTRICITY"]);
}



/*
function testfx () {

  //open spreadsheet by id 
  var id = "130NXD5xI5uYN-8ij1_RCY_-VLcy5o8U_c9-sneit7JE";  
  var riskReg_ss = SpreadsheetApp.openById(id);
  //select worsheet (tab) named Detailed
  var detailed_ws = riskReg_ss.getSheetByName("Detailed");

  var id_range = riskReg_ss.getRangeByName('ID');
  var cell = id_range.getCell(2,1);
  //Logger.log(cell.getValue());
  Logger.log(id_range.getNumRows());
}
*/