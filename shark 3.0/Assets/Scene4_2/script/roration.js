#pragma strict
var Torque:Vector3;
static var speed:float=30;
 var x:float;
 var y:float;
 var xy:float;
static var flag_1:boolean=false;
static var flag_update:boolean=false;
var button_click:GameObject;
var button_text:GameObject;
var music_stop:AudioSource;
var zhuan:boolean=false;
var music_zhuan:AudioSource;

function start(){


}

function FixedUpdate () {  
	
}

function Update(){

if(flag_update){

 //print(speed);
 rigidbody.AddTorque(Torque);
 speed=speed-100*Time.deltaTime;  
 Torque=Vector3(0,0,speed);

if(speed<=1){

zhuan=false;
Torque.z=0;
button_click.SendMessage("swite");
button_text.SendMessage("change_thetext_1");

speed=30;
//music_stop.Play();
if(Torque.z==0){

flag_update=false;
music_stop.Play();
music_zhuan.Stop();
}
}
 }
}

function click_thing(click_count:float){

speed=click_count*speed;
// print(speed);
if(!flag_update){
flag_update=true;
}

}

