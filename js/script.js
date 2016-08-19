"use strict";

/**
* Form submit validation function
*/
var submitForm = function() {

	var result = "Success!";
	
	var lettersOnly = /^[a-zA-Z]+$/;
	var emailPattern = /\S+\S+\.+\S+/;
	
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var message = document.getElementById("message");
	
	if(name.value.length === 0) {
		name.focus();
		result="Please, enter your name!";
	} else if(!name.value.match(lettersOnly)) {
		name.focus();
		result="Invalid name!";
	} else if(email.value.length === 0) {
		email.focus();
		result="Please, enter your email address!";
	} else if(!email.value.match(emailPattern)) {
		email.focus();
		result="Invalid email!";
	} else if(message.value.length === 0) {
		message.focus();
		result="Please, enter a message!";
	}
	
	alert(result);
	return false;
}