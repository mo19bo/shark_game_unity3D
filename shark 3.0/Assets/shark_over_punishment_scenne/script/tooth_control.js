#pragma strict
var b_y:float;
var t_y:float;
var bottom:GameObject;
var top:GameObject;
var s:float=0;
var i:int=1;
function Start () {
 bottom=GameObject.FindWithTag("bottom_tooth");
b_y=bottom.transform.position.y;
 top=GameObject.FindWithTag("top_tooth");
t_y=top.transform.position.y;
}

function Update () {
s+=Time.deltaTime;
b_y=b_y+Time.deltaTime*30;
t_y=t_y-Time.deltaTime*30;
bottom.transform.position.y=b_y;
top.transform.position.y=t_y;
if((b_y>=-7)&&(t_y<=7))
{
print("dasdasd");

bottom.transform.position.y=-7;
top.transform.position.y=7;

//bottom.transform.position.x=Mathf.Pow((-1),i++)*2;
//top.transform.position.x=3;
if(s>2)
{

Application.LoadLevel(4);
}



}
}
function wait(){

yield WaitForSeconds(5.0);
}

