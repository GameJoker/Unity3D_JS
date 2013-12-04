#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter (player : Collision){
	Debug.Log("碰撞到的物体的名字是：" + player.gameObject.name);
	if(player.gameObject.name == "player"&&Input.GetKey(KeyCode.Q))
	{
		Destroy(gameObject);
	}
}