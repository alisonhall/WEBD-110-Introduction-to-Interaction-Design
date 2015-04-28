var mainInputValue = document.getElementById('mainInput').value;
var tasksList = document.getElementById('tasks');

function addTask() {
	createElement(document.getElementById('mainInput').value, tasksList);
}

function createElement (value, destination){
	var newTask = document.createElement("li");
	var checkBox = document.createElement("checkbox");
	checkBox.innerHTML = value;
	newTask.appendChild(checkBox);
	destination.appendChild(newTask);
}