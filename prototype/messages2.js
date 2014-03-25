var george = 0;
//george = true;

function showMessage()
{
	var message = document.getElementById("msg").value;
	if(george == 0) {
		message = "You: " + message;
		george = 1;
	} else {
		message = "Siddhartha: " + message;
		george = 0;
	}
	//Now, create paragraph that will be added
	var paragraph = document.createElement("p");
	var update = document.createTextNode(message);

	paragraph.appendChild(update);

	//Finally, add the update at the top of the "status" div
	document.getElementById("status").appendChild(paragraph, 
		document.getElementById("status").firstChild);
}
