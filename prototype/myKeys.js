function showMessage()
{
	//First, get the message and date/time
	var message = document.getElementById("keyboard").value;
	var toPrint = message;
	//Now, create paragraph that will be added
	var paragraph = document.createElement("p");
	var update = document.createTextNode(toPrint);

	paragraph.appendChild(update);

	//Finally, add the update at the top of the "status" div
	document.getElementById("status").insertBefore(paragraph, 
		document.getElementById("status").firstChild);
}

$(
	function(){

		var k = $('#keyboard'),
		s = $('#switcher').find('input'),
		set = $('#switcher').find('.ui-controlgroup-controls'),
		kbOptions = {
			keyBinding : 'mousedown touchstart',
			alwaysOpen : true,
			// make sure jQuery UI styles aren't applied even if the stylesheet has loaded
			// the Mobile UI theme will still over-ride the jQuery UI theme
			css : {
				input          : '',
				container      : '',
				buttonDefault  : '',
				buttonHover    : '',
				buttonActive   : '',
				buttonDisabled : ''
			}
		};
		console.log(s);

		k
			.keyboard(kbOptions)
			/* initial setup for mobile extension */
			.addMobile({
				// keyboard wrapper theme
				container    : { theme:'a' },
				// theme added to all regular buttons
				buttonMarkup : { theme:'a', shadow:'true', corners:'true' },
				// theme added to all buttons when they are being hovered
				buttonHover  : { theme:'c' },
				// theme added to action buttons (e.g. tab, shift, accept, cancel);
				// parameters here will override the settings in the buttonMarkup
				buttonAction : { theme:'b' },
				// theme added to button when it is active (e.g. shift is down)
				// All extra parameters will be ignored
				buttonActive : { theme:'e' }
			});

		/* Theme switcher - temporary until jQuery Mobile Theme Switcher is available */
		/* s.bind('change', function(){
			k.getkeyboard().destroy(); // destroy keyboard
			k
			.keyboard(kbOptions) // build a new one, ready for a new theme
			.addMobile({
				container    : { theme : set.eq(0).find(':checked').attr('data-theme') },
				buttonMarkup : { theme : set.eq(1).find(':checked').attr('data-theme'), shadow:'true', corners:'true' },
				buttonHover  : { theme : set.eq(2).find(':checked').attr('data-theme') },
				buttonAction : { theme : set.eq(3).find(':checked').attr('data-theme') },
				buttonActive : { theme : set.eq(4).find(':checked').attr('data-theme') }
			});
		});*/

	});