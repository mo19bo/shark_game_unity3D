#pragma strict
var logo:GameObject;
var shark:GameObject;

var button_start:GameObject;
var button_cancel:GameObject;
var speed:float=2;
var b_y:float;
var t_y:float;
var s_y:float;
var q_y:float;
var n_y:float;
var set_y:float ;
var sc_l:Vector3;
var ini_switch:boolean=true;
var next_switch:boolean=false;
var next_bk:GameObject;
var settings:GameObject;
function Start () {
set_y=settings.transform .position .y;
t_y=shark.transform.position.x;
s_y=button_start.transform.position.y;
q_y=button_cancel.transform.position.y;
sc_l=logo.transform.localScale;
n_y=next_bk.transform.transform.position.x;
}

function Update () {
if(ini_switch){
set_y=set_y-0.5;
b_y=b_y-0.5;
t_y=t_y+0.5;
s_y=s_y+0.5;
q_y=q_y+0.5;

shark.transform.position.x=t_y;
settings.transform .position .y=set_y;
button_start.transform.position.y=s_y;
button_cancel.transform.position.y=q_y;
if((s_y>=-1)&&(q_y>=-2.5)){
settings.transform .position .y=3.5;
button_start.transform.position.y=-1;
button_cancel.transform.position.y=-2.5;
s_y=0;
q_y=0;
set_y=0;
}
if((t_y>=0)&&(b_y<=0)){


shark.transform.position.x=0;

logo.transform.position.z=-1;
logo.transform.localScale+=Vector3(8*Time.deltaTime,8*Time.deltaTime,0);
if(logo.transform.localScale.x>=4){
b_y=0;
t_y=0;

logo.transform.localScale=Vector3(4,3,1);
}
}
}
//初始动画
 else if(next_switch){
set_y=set_y+0.5;
 b_y=b_y-1;
t_y=t_y+4;
s_y=s_y-4;
q_y=q_y-4;
n_y=n_y-0.3;
settings.transform .position .y=set_y;
shark.transform.position.x=t_y;
button_start.transform.position.y=s_y;
button_cancel.transform.position.y=q_y;
next_bk.transform.transform.position.x=n_y;
if((s_y>=-5)&&(q_y>=-6.5)){
settings.transform .position .y=5;
button_start.transform.position.y=-5;
button_cancel.transform.position.y=-6.5;


}
if(logo.transform.localScale.x<=0){

logo.transform.localScale=Vector3(0,0,0);
}
if((t_y>=10)&&(b_y<=-10)){
shark.transform.position.x=10;

logo.transform.localScale-=Vector3(8*Time.deltaTime,8*Time.deltaTime,0);

if(n_y<=0){

next_bk.transform.transform.position.x=0;
Application.LoadLevel(2);



}

}




}
}
function swith(){

 ini_switch=false;
 next_switch=true;





}