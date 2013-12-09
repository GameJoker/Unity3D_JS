#pragma strict
var DISTANCE_FIND :int = 10;
private var player: GameObject;
private var AI_LOCATION_START : Vector3;
var Obstacle_State : int = 0;
function Start () {
	player = GameObject.Find("player");
	AI_LOCATION_START = new Vector3(transform.position.x,transform.position.y,transform.position.z);
}

function Update () {
	if(Vector3.Distance(transform.position,player.transform.position)<DISTANCE_FIND)
		{
		if(Input.GetKey(KeyCode.P))
		{
			Debug.Log("Pass");
			gameObject.SetActive(false);
			Destroy(gameObject);
			Obstacle_State =1;
		}
		}
}
