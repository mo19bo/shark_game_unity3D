#pragma strict
var  the_emotion=new ArrayList();
var temp:String;
function Start () {
the_emotion.Add("扮鬼脸");
the_emotion.Add("原地跳\n10次");
the_emotion.Add("向异性\n抛媚眼");
the_emotion.Add("跳芭蕾\n舞");
the_emotion.Add("拥抱一\n位异性");
the_emotion.Add("唱两只\n老虎");
the_emotion.Add("做婴儿\n啼哭状");
the_emotion.Add("唱青藏\n高原最\n后一句");
the_emotion.Add("用舌头\n舔自己\n的鼻子");
the_emotion.Add("扎马步");

var i=Random.Range(0,the_emotion.Count*326);

var temp=the_emotion[i%10];

the_emotion.Remove(temp);

GetComponent(TextMesh).text = temp;
}

function Update () {

}