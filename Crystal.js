#pragma strict
public var idleAnimation : AnimationClip;
private var _animation : Animation;
public var Crystal_STAND :int = 0;
private var enemyState :int;
function Start () {
	gameObject.animation.Play(idleAnimation.name);
	enemyState = Crystal_STAND;
}

function Update () {
	switch(enemyState)
		{
			case Crystal_STAND:
			gameObject.animation.Play(idleAnimation.name);
			break;
		}
}