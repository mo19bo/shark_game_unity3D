#pragma strict


var tooth1:GameObject;
var tooth2:GameObject;
var tooth3:GameObject;
var tooth4:GameObject;
var tooth5:GameObject;
var tooth6:GameObject;
var tooth7:GameObject;
var tooth8:GameObject;
var tooth9:GameObject;
var tooth10:GameObject;
var tooth11:GameObject;
var tooth12:GameObject;
var tooth13:GameObject;
var tooth14:GameObject;
var tooth15:GameObject;
var tooth16:GameObject;
var tooth17:GameObject;
var tooth18:GameObject;

//var tooth1_p:GameObject;
//var tooth2_p:GameObject;
//var tooth3_p:GameObject;
//var tooth4_p:GameObject;
//var tooth5_p:GameObject;
//var tooth6_p:GameObject;
//var tooth7_p:GameObject;
//var tooth8_p:GameObject;
//var tooth9_p:GameObject;
//var tooth10_p:GameObject;
//var tooth11_p:GameObject;
//var tooth12_p:GameObject;
//var tooth13_p:GameObject;
//var tooth14_p:GameObject;
//var tooth15_p:GameObject;
//var tooth16_p:GameObject;
//var tooth17_p:GameObject;
//var tooth18_p:GameObject;
var test:int;
var test1:int;

var gametag:String;
var po;

var tooth_pannel=new ArrayList();//store label of tooth
var tooth_pannel_re=new ArrayList();//store removed label of tooth
var flag:boolean;
var ju:int;
var label_rect:Rect;
var death:int;
var temp_string:String;
var window_rect:Rect;
var btn_rect:Rect;
var c:int;
var tag_thing:String;
function Start () {
death=Random.Range(1,18);
tooth1.SendMessage("certain",death);
tooth2.SendMessage("certain",death);
tooth3.SendMessage("certain",death);
tooth4.SendMessage("certain",death);
tooth5.SendMessage("certain",death);
tooth6.SendMessage("certain",death);
tooth7.SendMessage("certain",death);
tooth8.SendMessage("certain",death);
tooth9.SendMessage("certain",death);
tooth10.SendMessage("certain",death);
tooth11.SendMessage("certain",death);
tooth12.SendMessage("certain",death);
tooth13.SendMessage("certain",death);
tooth14.SendMessage("certain",death);
tooth15.SendMessage("certain",death);
tooth16.SendMessage("certain",death);
tooth17.SendMessage("certain",death);
tooth18.SendMessage("certain",death);
var i:int=1;


for(i=1;i<=18;i++){

temp_string=i.ToString();
tooth_pannel.Add(temp_string);
}
tooth_pannel.Remove(death.ToString());

}
function remove_the_tag(gametag){

tooth_pannel_re.Add(gametag);

tooth_pannel.Remove(gametag);
test=tooth_pannel_re.Count;
test1=tooth_pannel.Count;
}
function func_1(){

tag_thing=tooth_pannel[Random.Range(0,tooth_pannel.Count)];
var temp_object:GameObject=GameObject.FindGameObjectWithTag(tag_thing);

if(tooth_pannel.Count!=2){
if(!tooth_pannel_re.Contains(tag_thing)){
if(tooth_pannel.Contains(tag_thing)){
tooth_pannel_re.Add(tag_thing);
tooth_pannel.Remove(tag_thing);
}
}
temp_object.transform.position.z=temp_object.transform.position.z-10;
}

}
function func_2(){
if(tooth_pannel_re.Count>1){
var te=tooth_pannel_re[Random.Range(0,tooth_pannel_re.Count)];
if(!tooth_pannel.Contains(te)){
if(tooth_pannel_re.Contains(te)){
tooth_pannel.Add(te);
tooth_pannel_re.Remove(te);
}
}
var temp_object_re:GameObject =GameObject.FindGameObjectWithTag(te);
temp_object_re.transform.position.z=temp_object_re.transform.position.z+10;
}
}


