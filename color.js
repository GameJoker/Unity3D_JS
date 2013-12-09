#pragma strict
public var Stone02 : GameObject;
//the object to avetive camera
// the cameras 
public var MainCamera : GameObject;
public var CameraCrystal1 : GameObject;
function Start () {
	 gameObject.renderer.material.color.a = 0.4;
	 CameraCrystal1.SetActive(false);
	 MainCamera.SetActive(true); 
}

function Update () {
	if(!Stone02&&gameObject.renderer.material.color.a<1.0)
	{
		CameraCrystal1.SetActive(true);
	}
	if(!Stone02)
	{	
		if(gameObject.renderer.material.color.a<1.0)
		{
			gameObject.renderer.material.color.a += 0.1*Time.deltaTime;
		}
	if(gameObject.renderer.material.color.a>=1.0)
	{
		CameraCrystal1.SetActive(false);
	}
		
	}
}