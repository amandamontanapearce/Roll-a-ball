import UnityEngine;
import System;

class Rotator extends MonoBehaviour {
	function Update () {
		transform.Rotate (new Vector3 (15,30,45) * Time.deltaTime);
	}
}