 var WindowSwitch_1: boolean;
   var WindowSwitch : boolean;
//static var windowRect : Rect = Rect((Screen.width-300)/2, (Screen.height-400)/2, 300, 400);
var window_rect_1: Rect;
var style:GUIStyle;

var s_temp:String;
 var i:int;
//存放惊喜的列表
static var text_thing_sur=new ArrayList();
static var func_thing_sur=new ArrayList();
//存放惩罚的列表
static var text_thing_pun=new ArrayList();
static var func_thing_pun=new ArrayList();
//存放空白的列表
static var func_thing_no=new ArrayList();
static var text_thing_no=new ArrayList();


var sta_swi:boolean=true;


var winstyle:GUIStyle;
var winstyle_1:GUIStyle;
var title_temp;
var title;
var s:String;
 var parents:GameObject;
 var d:boolean;
var tag_se;
var tag_1;
// var btn_rect:Rect=Rect((Screen.width)/2-100, Screen.height/2+200,100,40);
 var btn_rec:GUIStyle;
//各区间的概
static var pun_pro_strat:int=1;
static var pun_pro_end:int=2;
static var sur_pro_strat:int=3;
static var sur_pro_end:int=97;
static var no_pro_strat:int=98;
static var no_pro_end:int=100;
static var count:int=18;
   var z:float=0;
var m_fScreenWidth  : float = 854;
var m_fScreenHeight : float = 480;
var m_fScaleWidth  : float;
var m_fScaleHeight : float;
function Awake ()
{
     m_fScaleWidth = (parseFloat(Screen.width)/m_fScreenWidth);
     m_fScaleHeight = (parseFloat(Screen.height)/m_fScreenHeight);      
}
function Start() 
{ 
     text_thing_sur.Add("顺序反转:/n即时现在点击的顺序开始逆向点击");
   text_thing_sur.Add("跳过下家:/n即下家不用点击牙齿");
    text_thing_sur.Add("麻烦你再点一次哈哈！");
    text_thing_sur.Add("下一位玩家只能点击接下来的一颗牙齿（左边）");
     func_thing_sur.Add("随机上来一颗牙齿！");
     
   func_thing_sur.Add("随机下去一颗牙齿！(如果剩下两个,无效）");
  
   func_thing_sur.Add("随机上来一颗牙齿！"); 
    func_thing_sur.Add("......让我想想");   //惊喜
   
   text_thing_pun.Add("和受罚的人一起接受惩罚");
   text_thing_pun.Add("下一轮免受惩罚");
   text_thing_pun.Add("从现在开始不能说你我他直到本来结束，否则你将一起接受惩罚");
   text_thing_pun.Add("现在开始你不能说话,否则要和受罚人一起受罚");
   
   func_thing_pun.Add("");//惩罚
   
   
   func_thing_no.Add("只是惊吓");
   text_thing_no.Add("你很幸运,鲨鱼对你什么都没干");
} 
function Updata(){


}
function OnGUI ()
 {
  if(WindowSwitch_1){
   Application.LoadLevel(5);
 // GUI.Window (21, Rect((Screen.width-300)/2, (Screen.height-250)/2, 350* m_fScaleWidth, 250*m_fScaleHeight), thewindow, "");
   
}
  else if(WindowSwitch)//其他的窗口
   {
    title=title_temp;
   z=z+1;
   
  
   GUI.Window (21, Rect((Screen.width-500)/2, (Screen.height-250)/2, 500* m_fScaleWidth, z*25*m_fScaleHeight), WindowFunction, "",winstyle);
   if(z>=10){
   z=10;
   
   }
   }

}

function WindowFunction (windowID : int)
{
    
  s=s_temp;
    GUI.Label(Rect( 130* m_fScaleWidth, 50*m_fScaleHeight,300* m_fScaleWidth,200*m_fScaleHeight),s,winstyle_1);
    
    if (GUI.Button (Rect( 200* m_fScaleWidth, 200*m_fScaleHeight,100* m_fScaleWidth,40*m_fScaleHeight), "",btn_rec))
   {
    
    
     parents.SendMessage("remove_the_tag",this.gameObject.tag);
    this.gameObject.transform.position.z= this.gameObject.transform.position.z-10;
      WindowSwitch= false;
     count--;
      
   }
}//other event
function thewindow(windowID : int){

  
    GUI.Label(Rect( 200* m_fScaleWidth, 50*m_fScaleHeight,300* m_fScaleWidth,400*m_fScaleHeight),"the death",winstyle_1);
   Application.LoadLevel(5);
//	    if (GUI.Button (Rect( 0, 0,100,40), "close window"))
//	   {
//	   
//	    Application.LoadLevel(4);
//	      WindowSwitch_1= false;
//	     count--;
//	   }
}//death event
//点击事件
function OnMouseEnter ()
 {
    renderer.material.color = Color.gray;
}

function OnMouseDown ()
{
if(sta_swi){
var u=this.tag;
var d =u.Equals(tag_1.ToString());
var d_=!d;
WindowSwitch_1=d;
WindowSwitch=d_;  
i=Random.Range(1,101);
 random();
  }
  else{
  
  
  
  
  }
}

function OnMouseExit ()
{
   renderer.material.color = Color.white;
   
}
function random(){
if((i>=pun_pro_strat)&&(i<=pun_pro_end))
    { title_temp="punishment!";
     var temp_i=Random.Range(1,3);
      if(temp_i==1){
      s_temp=text_thing_pun[Random.Range(0,text_thing_pun.Count+1)];
      
      }//文本惩罚
      else if(temp_i==2){
      
      s_temp= func_thing_pun[0];
      
      }//带动作的惩罚
   
   
     }
else if((i>=sur_pro_strat)&&(i<=sur_pro_end))
 { title_temp="surprise!";
     var temp_i_1=Random.Range(1,3);
     if(temp_i_1==1){
      s_temp=text_thing_sur[Random.Range(0,5)];
      }//文本惩罚
      else if(temp_i_1==2){
      var index_i=Random.Range(1,4);
      switch(index_i){ 
      case 1:
      s_temp=func_thing_sur[index_i];
     parents.SendMessage("func_1");
      break;
   case 2:
      s_temp=func_thing_sur[index_i];
 parents.SendMessage("func_2");
      break;  
      case 3:
      s_temp=func_thing_sur[index_i];
   //   func_3();
      break;
      default:
      break;
      }//带动作的惩罚
      
    
     }
     }
else if((i>=no_pro_strat)&&(i<=no_pro_end))
{     title_temp="nothing";
      s_temp=text_thing_no[0];
    
     }
 else
      return;
 }


function certain(tag_se){
tag_1=tag_se;
}
function caidan_piano(){

if(sta_swi){
sta_swi=false;
}
else{
sta_swi=true;


}

}

