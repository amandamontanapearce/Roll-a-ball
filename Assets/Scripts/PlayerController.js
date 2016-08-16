import UnityEngine;
import UnityEngine.UI;
import System;

class PlayerController extends MonoBehaviour {
	var speed  = 5;
	var countText : Text;
	var winText : Text;
	private var count = 0;

	function Start() {
		SetCountText();
		winText.Text = "";
	}

	function FixedUpdate() {
		var moveHorizontal : float = Input.GetAxis("Horizontal");
		var moveVertical : float = Input.GetAxis("Vertical");

		var movement = Vector3(moveHorizontal, 0.0f, moveVertical);

		GetComponent.<Rigidbody>().AddForce(movement * speed * Time.deltaTime);
	}

	function OnTriggerEnter(other : Collider) {
		if (other.gameObject.tag == "PickUp") {
		other.gameObject.SetActive(false);
		count += 1;
		SetCountText();
		}
	}

	function SetCountText() {
		countText.text = "Count: " + count.ToString();
		if (count >= 12) {
			winText.text = "You Win!";
		}
	}
}