#pragma strict
var bk_music:AudioSource;
var flag1:boolean=true;
function Start () {

}

function Update () {

}
function OnMouseDown(){
 
 
 if(flag1){
bk_music.Pause();
flag1=false;
}
else{
bk_music.Play();
flag1=true;
}
}