#pragma strict
var WindowSwitch_s:boolean=false;
var m_fScreenWidth  : float = 854;
var m_fScreenHeight : float = 480;
var m_fScaleWidth  : float;
var m_fScaleHeight : float;
var btn_rec_s:GUIStyle;
var winstyle_s:GUIStyle;
var winstyle_q:GUIStyle;
var z:float =0;
function Start () {

}

function Update () {

}
function Awake ()
{
     m_fScaleWidth = (parseFloat(Screen.width)/m_fScreenWidth);
     m_fScaleHeight = (parseFloat(Screen.height)/m_fScreenHeight);      
}
function OnGUI(){
if(WindowSwitch_s)//其他的窗口
   {
   
   z=z+1;
   
  
   GUI.Window (23, Rect((Screen.width-500)/2, (Screen.height-250)/2, 500* m_fScaleWidth, z*25*m_fScaleHeight), WindowFunction_1, "",winstyle_s);
   if(z>=10){
   z=10;
   
   }
   }
   }
   function WindowFunction_1(windowID : int){
   
   
   GUI.Label(Rect( 40* m_fScaleWidth, 50*m_fScaleHeight,100* m_fScaleWidth,200*m_fScaleHeight),"			    关于			\n1.本软件是一款聚会游戏，大家\n  可以在聚会时候依次点击鲨鱼\n  牙齿得到不同的事件。\n2.本软件基于Unity 3D开发.\n3.请多多支持我们.",winstyle_q);
   
    if (GUI.Button (Rect( 200* m_fScaleWidth, 200*m_fScaleHeight,100* m_fScaleWidth,40*m_fScaleHeight), "",btn_rec_s))
   {
    
    
     
      WindowSwitch_s= false;
    
      
   }
   }
function OnMouseDown(){


 WindowSwitch_s=true;

}