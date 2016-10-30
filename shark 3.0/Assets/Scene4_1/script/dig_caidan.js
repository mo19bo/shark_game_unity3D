#pragma strict
var control_1:boolean=true;
var control_2:boolean=false;
var control_3:boolean=false;
var control_4:boolean=false;
var control_5:boolean=false;//帮助
var y_1:float =0;
var text:GameObject;

var next_page:int=0;
var temp:String;
static var page_content=new ArrayList();
function Start () {
page_content.Add("那么就让我来帮\n帮你吧\n");
page_content.Add("1.首先你需要很\n多个小伙伴一起\n来帮我拔牙（一");
page_content.Add("个人可是没什么\n意思的哦\n");
page_content.Add("2.你们每个人需\n要一次点击我的\n牙齿，");
page_content.Add("每个牙齿后面都\n有各一张奖励或\n者惩罚\n");
page_content.Add("3.但是记住不要\n点到那颗坏牙哦，\n我可是吃肉的哦！");


temp=page_content[0];

}

function Update () {
 if(control_1)
 {
 y_1+=1;
 this.gameObject.transform .localScale=Vector3(12,y_1,1);
  if(y_1>=10){
    this.gameObject.transform .localScale=Vector3(12,10,1);
    
   
     text.GetComponent(TextMesh).text="你好！我是泰德帮\n我看看牙吧！";
      control_1=false;
      y_1=10;
  }
 
}
 if(control_2){
 y_1-=1;
 this.gameObject.transform .localScale=Vector3(12,y_1,1);
 if(y_1<=0){
    this.gameObject.transform .localScale=Vector3(12,0,1);
    
   
     text.GetComponent(TextMesh).text="";
      control_2=false;
      y_1=0;
  }
 
 }
 if(control_3){
 y_1+=1;
 this.gameObject.transform .localScale=Vector3(12,y_1,1);
  if(y_1>=10){
    this.gameObject.transform .localScale=Vector3(12,10,1);
    
   
     text.GetComponent(TextMesh).text="哇唔！你居然发现了\n一只彩蛋！\n";
      control_3=false;
      y_1=10;
 
 
 
 }
}
if(control_4)
{
y_1+=1;
 this.gameObject.transform .localScale=Vector3(12,y_1,1);
  if(y_1>=10){
    this.gameObject.transform .localScale=Vector3(12,10,1);
    
   
     text.GetComponent(TextMesh).text="哇唔！你居然\n发现了一只彩蛋！\n";
      control_4=false;
      y_1=10;



}
}
if(control_5)
{

y_1+=1;
 this.gameObject.transform .localScale=Vector3(12,y_1,1);
  if(y_1>=10){
    this.gameObject.transform .localScale=Vector3(12,10,1);
    
   
     text.GetComponent(TextMesh).text=temp;
     // control_5=false;
      y_1=10;



}
}
}
function OnMouseDown(){

if(!control_5){

control_2=true;
}
else{

next_page++;

if(next_page==1){

temp=page_content[1];

}
else if(next_page==2){
temp=page_content[2];
}
else if(next_page==3){
temp=page_content[3];

}
else if(next_page==4){
temp=page_content[4];

}
else if(next_page==5){
temp=page_content[5];

}
else if(next_page==6){
control_2=true;
control_5=false;

}

}

}

function switch_3(){


control_4=true;

}
function switch_1(){


control_3=true;

}
function switch_2(){


control_5=true;

}
