function showMessage()
{
	var clear = document.getElementById("msg");
	var message = document.getElementById("msg").value;
	message = "You: " + message;
	//Now, create paragraph that will be added
	var paragraph = document.createElement("p");
	var update = document.createTextNode(message);

	paragraph.appendChild(update);

	//Finally, add the update at the top of the "status" div
	document.getElementById("status").appendChild(paragraph, 
	document.getElementById("status").firstChild);
	clear.value = "";
	setTimeout(replyMessage, 2000);
}

function replyMessage()
{
	var message = "Siddhartha: Sure! Sounds good."
	var paragraph = document.createElement("p");
	var update = document.createTextNode(message);

	paragraph.appendChild(update);

	//Finally, add the update at the top of the "status" div
	document.getElementById("status").appendChild(paragraph, 
	document.getElementById("status").firstChild);
}