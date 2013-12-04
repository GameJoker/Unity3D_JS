#pragma strict
public var idleAnimation : AnimationClip;
public var walkAnimation : AnimationClip;
private var _animation : Animation;//动画组件
public var ENEMY_STAND :int = 0;
public var ENEMY_WALK :int = 1;
public var ENEMY_RUN :int= 2;
public var ENEMY_PAUSE :int= 3;
public var ENEMY_BACK :int =4;
private var enemyState :int;//怪物状态
private var player : GameObject;
public var AI_ATTACK_DISTANCE:int = 10;//怪物发现距离
public var AI_LOCATION_START : Vector3;
public var AI_LOCATION_Random : int;
public var isHatred :boolean = false;
function Start () {
	enemyState = ENEMY_STAND;
	player = GameObject.Find("player");
	AI_LOCATION_START = new Vector3(transform.position.x,transform.position.y,transform.position.z);
}
function Awake ()
{
	_animation = GetComponent(Animation);
	if(!_animation)
		Debug.Log("The character you would like to control doesn't have animations. Moving her might look weird.");
	if(!idleAnimation) {
		_animation = null;
		Debug.Log("No idle animation found. Turning off animations.");
	}
	if(!walkAnimation) {
		_animation = null;
		Debug.Log("No walk animation found. Turning off animations.");
	}
			
}
function Update () {
	if(Vector3.Distance(transform.position,player.transform.position) < AI_ATTACK_DISTANCE || isHatred){
		gameObject.animation.Play(walkAnimation.name);
		enemyState = ENEMY_RUN;
		transform.LookAt(player.transform);
		if(Vector3.Distance(transform.position,player.transform.position)<1)
		{
			Debug.Log("怪物被杀了");
			Destroy(gameObject);
		}
	}
	if(Vector3.Distance(transform.position,player.transform.position) > AI_ATTACK_DISTANCE&&Vector3.Distance(transform.position,AI_LOCATION_START)>1)
	{
		gameObject.animation.Play(walkAnimation.name);
		enemyState = ENEMY_BACK;
		transform.LookAt(AI_LOCATION_START);
	}
	switch(enemyState)
		{
			case ENEMY_STAND:
			gameObject.animation.Play(idleAnimation.name);
			/*AI_LOCATION_Random = Random.Range(0,360);
			gameObject.transform.Rotate(new Vector3(0,AI_LOCATION_Random,0));
			transform.Translate(Vector3.forward * Time.deltaTime * 3); 
			if(Vector3.Distance(transform.position,AI_LOCATION_START)> 10)
			{
				enemyState = ENEMY_BACK;
			}*/
			break;
			case ENEMY_RUN:
			if(Vector3.Distance(transform.position,player.transform.position ) < AI_ATTACK_DISTANCE)
			{
				transform.Translate(Vector3.forward * Time.deltaTime * 10);
			}
			else 
			{
				enemyState = ENEMY_BACK;
			}
			break;
			case ENEMY_BACK:
			if(Vector3.Distance(transform.position,AI_LOCATION_START)> 1)
			{
				transform.Translate(Vector3.forward * Time.deltaTime * 3);
			}
			enemyState = ENEMY_STAND;
			break;
		}
	
}
