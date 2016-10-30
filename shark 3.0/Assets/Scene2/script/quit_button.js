#pragma strict
//static var quit_button:Rect=Rect((Screen.width-130)/2,(Screen.height-40)/2+60,140*m_fScreenWidth,50*m_fScaleHeight);
var confirm_button:GUIStyle;
var cancel_button:GUIStyle;
var customButton_1:GUIStyle;
var windowRect:Rect;
static var  WindowSwitch : boolean = false;
var cancel_button_rect:Rect;
var confirm_button_rect:Rect;
var windows_style:GUIStyle;
var play_music_q:AudioSource;

var m_fScreenWidth  : float = 800;
var m_fScreenHeight : float = 480;
var m_fScaleWidth  : float;
var m_fScaleHeight : float;
var size:Vector3;
function Start () {
size=this .gameObject.transform .localScale ;
}
function Awake ()
{
     m_fScaleWidth = (parseFloat(Screen.width)/m_fScreenWidth);
     m_fScaleHeight = (parseFloat(Screen.height)/m_fScreenHeight);      
}
function OnGUI(){

if(WindowSwitch)
   {
    
        windowRect = GUI.Window (0, Rect((Screen.width-300)/2,(Screen.height-200)/2,300*m_fScaleWidth,200*m_fScaleHeight), WindowContain, "",windows_style);
   }


}
function OnMouseDown ()
{
//GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (m_fScaleWidth, m_fScaleHeight, 1)); 

      WindowSwitch = true;
   
   
}
function WindowContain (windowID : int)
{
    if (GUI.Button (Rect(170*m_fScaleWidth,120*m_fScaleHeight,80*m_fScaleWidth,60*m_fScaleHeight), " ",cancel_button))
   {
      WindowSwitch = false;
   }
    if (GUI.Button (Rect(50*m_fScaleWidth,120*m_fScaleHeight,80*m_fScaleWidth,60*m_fScaleHeight), " ",confirm_button))
   {
      Application.Quit();
   }
}
function OnMouseEnter () {
 play_music_q.Play();
this.gameObject.transform.localScale+=Vector3(0.3,0.3,0);
//GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (m_fScaleWidth, m_fScaleHeight, 1)); 

}

function OnMouseExit(){


this.gameObject.transform.localScale=size;

}
