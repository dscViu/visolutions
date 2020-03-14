# VI Solutions 
A digital front for a local business

## Table of Content
- [App Script](#App-Script)
- [Back end methods](#Back-end-methods)

## App Script 
This code runs in [Google App Script](https://developers.google.com/apps-script).   
The file should be ran from within an App Script project. Create an App Script project [here](https://script.google.com/)    
The App Script methods specific to Google spreadsheets are described [here](https://developers.google.com/apps-script/reference/spreadsheet)   

## Back end methods
### Append  
#### `append(object obj)`  
  
Append extracts the data from obj and adds the data to the corresponding column in the sheet.   

Obj should have the member variables below. 

| Variable Name  | Spreadheet Header |
| ------------- | ------------- |
| obj.hazard_source  | Hazard Source  |
| obj.hazard_stage | Hazard Stage/ Occurrence |
| obj.harmSrc | Energy/ Harm Source |
| obj.duration | Duration Energy/ Harm Exposure |
| obj.frequency | Frequency of Energy/ Harm Exposure |
| obj.probability | Probability of Exposure |
| obj.severity | Severity | 
| obj.transferExposure | Energy/  Harm Transfer Exposure |
| obj.numTargets | # of Targets | 
| obj.fatalityFactor | Fatality Factor |


__Example__

```
  function capture_harmData() { 
    var harmData = {}; 
    harmData.hazard_source = dropDowns.hazard_source_dropdown.value;
    harmData.hazard_stage = dropDowns.hazard_stage_dropdown.value;  
    harmData.harmSrc = dropDowns.harmSrc_dropdown.value;   
    harmData.duration = dropDowns.duration_dropdown.value;   
    harmData.frequency = dropDowns.frequency_dropdown.value;   
    harmData.probability = dropDowns.probability_dropdown.value;   
    harmData.severity = dropDowns.severity_dropdown.value;   
    harmData.transferExposure = txtInput.transferExposure_input.value;
    harmData.numTargets = txtInput.numTargets_input.value; 
    harmData.fatalityFactor = txtInput.fatalityFactor_input.value; 
    
    //calling append function with harmData object  
    google.script.run.append(harmData);
    
    
 ```
 
 
