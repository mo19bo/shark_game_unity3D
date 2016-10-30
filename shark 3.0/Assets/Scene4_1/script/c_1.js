#pragma strict
static var amount:int=0;
var caidan:GameObject;
var caidan_1:GameObject;
var music_2:AudioSource;
var help:GameObject;
var sun_f:boolean=false;
function Start () {

}

function Update () {

}
function OnMouseDown(){
if(this.gameObject.tag=="c_1"){
amount++;
if(amount>=3){

caidan.SendMessage("switch_1");
caidan_1.transform .position .z=-24;
amount=0;
}
}
else if(this.gameObject.tag=="c_2"){
amount++;
if(amount>=2){
caidan.SendMessage("switch_1");
music_2.Play();
amount=0;

}


}
else if(this.gameObject.tag=="teach")
{
caidan.SendMessage("switch_2");

}

}