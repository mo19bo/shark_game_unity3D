#pragma strict
var about_btn:GameObject;
var audio_btn:GameObject;
var flag_1:boolean=false;
var flag_2:boolean=false;
var a_s:Vector3;
var a_t:Vector3;
var state:boolean=false;
function Start () {
a_s=about_btn.transform .localScale ;
a_t= audio_btn.transform .localScale ;
}

function Update () {
if(flag_1)
{

about_btn.transform.localScale+=Vector3(8*Time.deltaTime,8*Time.deltaTime,1);
audio_btn.transform.localScale+=Vector3(8*Time.deltaTime,8*Time.deltaTime,1);
if(audio_btn.transform.localScale.x>=1)
{

audio_btn.transform.localScale=Vector3(1,1,1);
if(about_btn.transform.localScale.x>=1)
{

about_btn.transform.localScale=Vector3(1,1,1);
state=true;
flag_1=false;
}


}



}
if(flag_2){
about_btn.transform.localScale-=Vector3(8*Time.deltaTime,8*Time.deltaTime,0);
audio_btn.transform.localScale-=Vector3(8*Time.deltaTime,8*Time.deltaTime,0);
if(audio_btn.transform.localScale.x<=0)
{

audio_btn.transform.localScale=Vector3(0,0,0);
if(about_btn.transform.localScale.x<=0)
{

about_btn.transform.localScale=Vector3(0,0,0);
state=false;
flag_2=false;
}


}



}

}
function setting_rotate_swith(){
if(!state){
flag_1=true;

}
else
{
print("0");
flag_2=true;


}

}