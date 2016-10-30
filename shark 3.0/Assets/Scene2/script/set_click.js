#pragma strict
var movie_1_swith:boolean=false;
var movie_2_swith:boolean=false;
var stat:boolean=false;
var z:float=0;
function Start () {

}

function Update () {
if(movie_1_swith){
z+=20;
this.gameObject.transform.Rotate(0,0,z);
if(z>=180){

this.gameObject.transform .rotation .z=180;
z=180;
}
}
else if(movie_2_swith){
z-=20;
this.gameObject.transform .Rotate(0,0,z);


if(z<=0){
z=0;
this.gameObject.transform .rotation .z=0;

}

}


}


function OnMouseDown(){

if(!stat){

movie_1_swith=true;
movie_2_swith=false;
gameObject.SendMessage ("setting_rotate_swith");
stat=true;
}
else
{
movie_2_swith=true;

gameObject.SendMessage ("setting_rotate_swith");
stat=false;
movie_1_swith=false;
}


}