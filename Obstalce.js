#pragma strict
var DISTANCE_FIND :int = 2;
private var player: GameObject;
public var AI_LOCATION_START : Vector3;
function Start () {
	player = GameObject.Find("player");
	AI_LOCATION_START = new Vector3(transform.position.x,transform.position.y,transform.position.z);
}

function Update () {
	if(Vector3.Distance(transform.position,player.transform.position)<DISTANCE_FIND)
		{
		if(Input.GetKey(KeyCode.P))
		{
			Debug.Log("通过");
			Destroy(gameObject);
		}
		}
}