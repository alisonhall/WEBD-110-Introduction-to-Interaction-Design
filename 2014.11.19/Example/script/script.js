


var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0];
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completeTaskHolder = document.getElementById('completed-tasks');


// add task...
var addTasks = function() {
	var listItem = createNewTaskElement(taskInput.value);
	incompleteTaskHolder.appendChild(listItem);
}

// when user presses the 'add button'
addButton.onclick = addTasks;

var taskComplete = function() {
	console.log("Checkbox clicked");
	var listItem = this.parentNode;
	completeTaskHolder.appendChild(listItem);
}

// create new task within the incomplete list
var createNewTaskElement = function(taskString) {
	var listItem = document.createElement('li');
	var checkBox = document.createElement('input');
	checkBox.type = 'checkBox';

	checkBox.onclick = addTasks;

	checkBox.onclick = taskCompleted;
	var label = document.createElement('label');
	label.innerText = taskString;
	var editInput = document.createElement('input');
	editInput.type = 'text';
	var deleteButton = document.createElement('button');
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";	

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(deleteButton);

	return listItem;
}


// taskListItem.querySelector('input[type=checkBox]');
// taskListItem.querySelector('button.delete');
