#pragma strict
var tim:int;
 var swith=0;
 var timeUpdate:int;
 var timeInterval : int = 4; 
 var bk:GameObject;
 var y:int;
 var music_c:AudioSource;
 var music_click:AudioSource;
 var music_enter:AudioSource;
function Update(){

}


function OnMouseDown ()
{
music_click.Play();
if(this.gameObject.tag=="more_button")
{

}
else if(this.gameObject.tag=="other_button"){
y=4;
music_c.Play();
bk.SendMessage("load",y);
bk.SendMessage("jud_flag");
}
else if(this.gameObject.tag=="shark_button")
{
y=3;
music_c.Play();
bk.SendMessage("load",y);
bk.SendMessage("jud_flag");

  
}
}
function OnMouseEnter ()
 {
 music_enter.Play();
 this.gameObject.transform.Rotate(Vector3(0,30,0));
 }
function OnMouseExit ()
{ music_enter.Stop();
  this.gameObject.transform.Rotate(Vector3(0,-30,0));
   
}