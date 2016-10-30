#pragma strict
var zhuanpan:GameObject;
var click:float;
private  var Timeupdate:float;
var Timeinter:int=4;
static var swit:boolean=true;
static var swit_1:boolean=false;
var text:GameObject;
var button_cli:Texture;
var music_zhuan:AudioSource;
function Start () {

}

function Update () {
if(swit_1){
Timeupdate+=Time.deltaTime;
if((Timeupdate>Timeinter)&&(swit)){
//print(click);
var t=GameObject.FindGameObjectWithTag("btn");
t.transform.position.z=10;
swit=false;
swit_1=false;
zhuanpan.SendMessage("click_thing",click);

music_zhuan.Play();
Timeupdate=0;
}
}

}
function OnMouseDown(){

swit_1=true;
if(swit){

click++;

text.SendMessage("change_thetext",click);

}

}
function OnMouseEnter(){


this.gameObject .renderer .material.SetTexture("_button_cli",button_cli);

}
function swite(){
swit=true;

//swit_1=false;
click=0;
}