//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.


var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsbyTagName('button')[0]; //first button
//PUT ID ON ELEMENT
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); //ul - #incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); //ul - #completed-tasks


//Create a New Task List Item
var createNewTaskElement = function(taskString) {
	//Is called when adding a new task

	//Create List Item
	var listItem = document.createElement('li');

	//input (checkbox)
	var checkBox = document.createElement('input'); //type: checkbox
	//label
	var label = document.createElement('label');
	//input (text)
	var editInput = document.createElement("input"); //text
	//button.edit
	var editButton = document.createElement("button");
	//button.deleete
	var deleteButton = document.createElement("button");

	//Each elements needs modifying
	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.className = "edit";
	deleteButton.className = "delete";

	editButton.innerText = "Edit";
	deleteButton.innerText = "Delete";
	label.innerText = taskString;
		//.innerHTML passes in a string of HTML and it won't encode any of the special characters.
		//.innerText passes in a string and it encodes special characters

	//Each element needs appending
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);


	return listItem; //will need to append listItem later
}


//Add a new task
var addTask = function() {
	console.log("Add task...");
	//Is called when the Add button is pressend

	//Create a new list item with the text from #new-task:
	var listItem = createNewTaskElement(taskInput.value); //the text inside the add item input box

	//Append listItem to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);

	bindTaskEvents(listItem, taskCompleted); //changing where the item is binded when it is created

	taskInput.value = ""; //clears the input text box after adding a new task
}

//Edit an existing task
var editTask = function() {
	console.log("Edit task...");
	//Is called when the Edit button is pressed

	var listItem = this.parentNode;

	var editInput = listItem.querySelector('input[type]=text');
	var label = listItem.querySelector('label');

	//if the class of the parent is .editMode
	var containsClass = listItem.classList.contains('editMode');
	if(containsClass) {
		//Switch from .editMode
		//label text become the input's value
		label.innerText = editInput.value;
	} else { //else
		//Switch to .editMode
		//input value becomes the label's text
		editInput.value = label.innerText;
	}
		
	//Toggle .editMode on the parent (list item)
	listItem.classList.toggle('editMode');
}



//Delete an existing task
var deleteTask = function() {
	console.log("Delete task...");
	//Is called when the Delete button is pressed

	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	//Remove the parent list item from the ul
	ul.removeChild(listItem);
}



//Mark a task as complete
var taskCompleted = function() {
	console.log("Task complete...");
	//Is called when the checkbox is pressed

	//Append the task list item to the #completed-tasks
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);

	bindTaskEvents(listItem, taskIncomplete); //changing where the item is binded when it is already created
}



//Mark a task as incomplete
var taskIncomplete = function() {
	console.log("Task incomplete...");
	//Is called when the checkbox is unchecked

	//Append the task list item to the #incomplete-tasks
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);

	bindTaskEvents(listItem, taskCompleted); //changing where the item is binded when it is already created
}


var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
	console.log("Bind list item events");
	//is called to bind the list item to a certain section (used in adding a task, or changing whether it is complete or incomplete)

	//select taskListItem's children
	var checkBox = taskListItem.querySelector("input[type=checkbox]"); //querySelector() --> Returns the first element that is a descendant of he element on which it is invoked that matches the specified group of selectors.
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

		//bind the editTask to edit button
		editButton.onclick = editTask;

		//bind the deleteTask to the delete button
		deleteButton.onclick = deleteTask;

		//bind the checkBoxEventHandler to the checkbox
		checkBox.onchange = checkBoxEventHandler; //.onchange --> sets and returns the event handler for the change event
}



//Set the click handler to the addTask function
addButton.addEventListener("click", addTask); //addEventListener can handle multiple listeners on the same item/event, onclick will only handle one listener.

//cycle over incompleteTasksHolder ul list items
for(var i=0; i<incompleteTasksHolder.children.length; i++) { //for each list item
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted); //bind events to list item's children (taskCompleted)
}

//cycle over completedTasksHolder ul list items
for(var i=0; i<completedTasksHolder.children.length; i++) { //for each list item
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete); //bind events to list item's children (taskIncomplete)
}



// IMPROVEMENTS:
//Make sure that you can't add an empty task item.
//Change the edit button text to be Save when it is being edited.