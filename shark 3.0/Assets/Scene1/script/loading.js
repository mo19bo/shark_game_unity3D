#pragma strict


var timeInterval : int = 4;  
var level : int;  
  
private var timeUpdate : float;  
  
function Start () {  
  
}  
  
function Update () {  
    timeUpdate += Time.deltaTime;  
    if (timeUpdate > timeInterval) {  
        Application.LoadLevel(1);  
    }  
  
}  