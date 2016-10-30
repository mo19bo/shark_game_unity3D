#pragma strict
var  the_emotion=new ArrayList();
var temp:String;
function Start () {

the_emotion.Add("伤心地");
the_emotion.Add("高兴地");
the_emotion.Add("愉悦地");
the_emotion.Add("无助地");
the_emotion.Add("绝望地");
the_emotion.Add("无奈地");
the_emotion.Add("焦虑地");
the_emotion.Add("充满希望地");
the_emotion.Add("丧心病狂地");
the_emotion.Add("一脸无辜地");

var i=Random.Range(0,the_emotion.Count*326);

var temp=the_emotion[i%10];

the_emotion.Remove(temp);

GetComponent(TextMesh).text = temp;

}

function Update () {

}