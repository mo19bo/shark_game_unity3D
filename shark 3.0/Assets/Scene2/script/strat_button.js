#pragma strict
var customButton : GUIStyle;

var customButton_2:GUIStyle;
var customButton_3:GUIStyle;

var play_music:AudioSource;
var next:GameObject;
 //static var start_button:Rect=Rect((Screen.width-150)/2,(Screen.height-30)/2,160,60);

// static var settings_button:Rect=Rect(0,Screen.height-50,50,50);
//static var share_button:Rect=Rect(Screen.width-50,Screen.height-50,50,50);
var font:Rect;

var size:Vector3;
function Start () {
size=this .gameObject.transform .localScale ;
}

function Update () {

}
function OnMouseDown () {

//GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (m_fScaleWidth, m_fScaleHeight, 1)); 
 
   var t=GameObject.Find("dimian");
   t.SendMessage("swith");
}
function OnMouseEnter () {
 play_music.Play();
this.gameObject.transform.localScale+=Vector3(0.3,0.3,0);
//GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (m_fScaleWidth, m_fScaleHeight, 1)); 

}

function OnMouseExit(){


this.gameObject.transform.localScale=size;

}





