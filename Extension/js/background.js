'use strict';

var HOST = 'http://127.0.0.1:8080/'

chrome.webNavigation.onCompleted.addListener(function (url) {
	get_analyzed_info()
});

function callback(){
	
}

// send URLs
function get_analyzed_info(){
	var xhr = new XMLHttpRequest();
	
	// After server sent data, below code will run
	xhr.onload = function() {
		if (xhr.status === 200 || xhr.status === 201){
			const received_arr = JSON.parse(xhr.response)
			received_arr.forEach(function(elem){
				var status = elem.status;
				var message = elem.message;
				console.log('Status : ' + status + ', message : ' + message)
				
			});
		} else {
			alert('ERROR : ' + xhr.responseText);
			console.error(xhr.responseText);
		}
	};
	
	var request_url = HOST + 'myapp/user/analyzedinfo/get'
	
	xhr.open("POST", request_url);
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	
	// Various json object creation

	// 1. insert data after creation
	var json1 = new Object();
	json1.url = 'https://blog.naver.com/ohmin0030/222109002875';
	
	// 2. insert data with creation
	var json2 = { 
		'url': 'https://blog.naver.com/jsjung1999/221822297628',
	}
	
	var json3 = new Object();
	json3.url = 'https://blog.naver.com/seamarket0/222070563655';
	var json4 = new Object();
	json4.url = 'https://blog.naver.com/spring5867/221848503423';
	var json5 = new Object();
	json5.url = 'https://blog.naver.com/nanaflowercake/222010991755';
	
	// Create array for send
	var jsonArray = new Array();
	jsonArray.push(json1);
	jsonArray.push(json2);
	jsonArray.push(json3);
	jsonArray.push(json4);
	jsonArray.push(json5);
	
	var dataJSON = JSON.stringify(jsonArray);
	
	// Send JSON array
	xhr.send(dataJSON);
}
