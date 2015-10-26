
window.onload = function(){

var inputName = document.getElementById('slackname');
var inputAPI = document.getElementById('apitoken');
var submit = document.getElementById('submit');

if(!localStorage.hasOwnProperty('slackName'))
	localStorage.slackName = '';
if(!localStorage.hasOwnProperty('slackApiToken'))
	localStorage.slackApiToken = '';

inputName.value = localStorage.slackName;
inputAPI.value = localStorage.slackApiToken;

submit.addEventListener('click', function() {
	localStorage.slackName = inputName.value;
	localStorage.slackApiToken = inputAPI.value;
});

}
