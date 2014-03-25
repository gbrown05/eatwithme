var george;
//george = true;

function showMessage()
{
	var message = document.getElementById("msg").value;
	if(george == true) {
		message = "George: " + message;
		george = false;
	} else {
		message = "Emily: " + message;
		george = true;
	}
	//Now, create paragraph that will be added
	var paragraph = document.createElement("p");
	var update = document.createTextNode(message);

	paragraph.appendChild(update);

	//Finally, add the update at the top of the "status" div
	document.getElementById("status").appendChild(paragraph, 
		document.getElementById("status").firstChild);
}
