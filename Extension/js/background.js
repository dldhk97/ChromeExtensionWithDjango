'use strict';

var data = {};

// When chrome complted load page, call this function
chrome.webNavigation.onCompleted.addListener(function (url) {
	
	var server_url = 'http://127.0.0.1:8000/myapp'
	
	// POST Request
	alert('post');
	var xhr = new XMLHttpRequest();
	
	// Create FormData for send
	var formData = new FormData();
	formData.append('name', 'zero');
	formData.append('birth', 1923);
	
	// After post, this function will be called. 
	// If received 200/201, it means successful request.
	xhr.onload = function() {
		if (xhr.status === 200 || xhr.status === 201){
			alert('Server said : ' + xhr.responseText);
			console.log(xhr.responseText);
		} else {
			alert('ERROR : ' + xhr.responseText);
			console.error(xhr.responseText);
		}
	};
	
	xhr.open("POST", server_url + '/');
	
	xhr.send(formData);
});
