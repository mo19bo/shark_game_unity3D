#pragma strict
var button_sc_1:Vector3;
var button_sc_2:Vector3;
var button_sc_3:Vector3;
var button_shark:GameObject;
var button_more:GameObject;
var button_other:GameObject;
static var flag:boolean=true;
var d:int;
function Start () {

button_sc_1=button_shark.transform.localScale;
button_sc_2=button_more.transform.localScale;
button_sc_3=button_other.transform.localScale;
}

function Update () {
if(flag){
button_other.transform.localScale+=Vector3(4*Time.deltaTime,7*Time.deltaTime,1);
button_more.transform.localScale+=Vector3(4*Time.deltaTime,7*Time.deltaTime,1);
button_shark.transform.localScale+=Vector3(4*Time.deltaTime,7*Time.deltaTime,1);
if((button_other.transform.localScale.x>=4)&&(button_other.transform.localScale.y>=7)){
button_shark.transform.localScale=Vector3(4,7,1);
button_more.transform.localScale=Vector3(4,7,1);
button_other.transform.localScale=Vector3(4,7,1);
}
}
if(!flag){

button_other.transform.localScale-=Vector3(4*Time.deltaTime,7*Time.deltaTime,0);
button_more.transform.localScale-=Vector3(4*Time.deltaTime,7*Time.deltaTime,0);
button_shark.transform.localScale-=Vector3(4*Time.deltaTime,7*Time.deltaTime,0);
if((button_other.transform.localScale.x<=0)&&(button_other.transform.localScale.y<=0)){
button_shark.transform.localScale=Vector3(0,0,0);
button_more.transform.localScale=Vector3(0,0,0);
button_other.transform.localScale=Vector3(0,0,0);

flag=true;
if(flag){
Application.LoadLevel(d);
}
}









}
}
function load(level:int){

d=level;

}

function jud_flag(){


flag=false;

}