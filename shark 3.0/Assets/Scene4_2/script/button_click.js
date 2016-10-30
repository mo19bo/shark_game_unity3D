#pragma strict
var music_zhuan:AudioSource;
var music_stop:AudioSource;
function Start () {
GetComponent(TextMesh).text ="开始";
}

function change_thetext(c:float){

GetComponent(TextMesh).text ="次数"+c.ToString();
}
function change_thetext_1(){

      var t=GameObject.FindGameObjectWithTag("btn");
      t.transform.position.z=-5;
  
      GetComponent(TextMesh).text ="停止";

}