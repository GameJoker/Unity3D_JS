#pragma strict

private var Crystal1 : GameObject;//the object to active transport;

public var PLAYER_LOCATION_START : Vector3;//the coordinate initial;

public var ACTIVE_DISTANCE :int = 10;//the range to active transport;

function Start () {
	Crystal1 = GameObject.Find("Crystal1");
	PLAYER_LOCATION_START = new Vector3(transform.position.x,transform.position.y,transform.position.z);
}

function Update () {
	if(Vector3.Distance(transform.position,Crystal1.transform.position)<ACTIVE_DISTANCE)
		{
		if(Input.GetKey(KeyCode.T))
		{
			Debug.Log("transport");
			transform.position=PLAYER_LOCATION_START;
		}
		}
}