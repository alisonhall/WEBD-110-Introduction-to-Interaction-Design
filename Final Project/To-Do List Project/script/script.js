
var newListInput; //new-list
var addListButton;
var allListsHolder; //ul - #allLists
var allTasksHolder;

var taskInput; //new-task
var addTaskButton;
var incompleteTasksHolder;
var completedTasksHolder; //ul - #completed-tasks


var numLists = 0;


var lists = [
	{listName:"firstList", incompleteTasks:null, completedTasks:null, listItem:null, listIndex: numLists}
];

numLists++;

var currentTaskList = 0;
var listCounter = 0;

window.onload = function() {

	newListInput = document.getElementById('new-list'); //new-list
	addListButton = document.getElementById('addListButton');
	allListsHolder = document.getElementById('allLists'); //ul - #allLists
	
	taskInput = document.getElementById('new-task'); //new-list
	addTaskButton = document.getElementById('add-button');
	allTasksHolder = document.getElementById('allTasks');

	incompleteTasksHolder = document.getElementById('incomplete-tasks');
	completedTasksHolder = document.getElementById('completed-tasks');





	// ****************
	// ****************
	// ****************
	// ****************
	// ****************
	// ****************
	// LISTS FUNCTIONS CODE
	// ****************
	// ****************
	// ****************
	// ****************
	// ****************
	// ****************




	var viewTasks = function() {
		console.log("View Tasks...");

		incompleteTasksHolder = document.getElementById('incomplete-tasks');
		completedTasksHolder = document.getElementById('completed-tasks');
		if (this == window)
		{
			// currentTaskList = 0;
			console.log("true");

		} else {
			var self = this;
			console.log("View Tasks...", self.getAttribute('data-index'));

			listCounter = self.getAttribute('data-index');
			console.log("false");
		}
		

		// if (currentTaskList = 0) {
			
		// }



		if ((incompleteTasksHolder.children.length) > 0) {
			lists[currentTaskList].incompleteTasks = incompleteTasksHolder.innerHTML;
			incompleteTasksHolder.innerHTML = "";
			console.log("true");
		};
		if ((completedTasksHolder.children.length) > 0) {
			lists[currentTaskList].completedTasks = completedTasksHolder.innerHTML;
			completedTasksHolder.innerHTML = "";
		};
		if ((lists[listCounter].incompleteTasks) != null) {
			incompleteTasksHolder.innerHTML = lists[listCounter].incompleteTasks;
		};
		if ((lists[listCounter].completedTasks) != null) {
			completedTasksHolder.innerHTML = lists[listCounter].completedTasks;

			
		};

		//cycle over incompleteTasksHolder ul list items
		for (var i=0; i<incompleteTasksHolder.children.length; i++) {
			bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
		}

		// //cycle over completedTasksHolder ul list items
		for (var i=0; i<completedTasksHolder.children.length; i++) {
			bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
			//set checkboxes "on"
			completedTasksHolder.children[i].querySelector("input[type=checkbox]").checked = true;
		}

		currentTaskList = listCounter;
	};

	//Create a New To-Do List
	var createNewListElement = function(taskString) {
		console.log("Create new list element...");
		//Is called when adding a new task

		//Create List Item
		var listItem = document.createElement("li");
		//label
		var listNameButton = document.createElement("button");
		//input (text)
		var editInput = document.createElement("input"); //text
		//button.edit
		var editButton = document.createElement("button");
		//button.delete
		var deleteButton = document.createElement("button");

		//Each elements needs modifying
		editInput.type = "text";

		listNameButton.className = "listName";
		listNameButton.setAttribute('data-index', numLists);
		listNameButton.addEventListener("click", viewTasks);
		editButton.className = "edit";
		deleteButton.className = "delete";

		editButton.textContent = "Edit";
		deleteButton.textContent = "Delete";
		listNameButton.textContent = taskString;
			//.innerHTML passes in a string of HTML and it won't encode any of the special characters.
			//.textContent passes in a string and it encodes special characters

		//Each element needs appending
		listItem.appendChild(listNameButton);
		listItem.appendChild(editInput);
		listItem.appendChild(editButton);
		listItem.appendChild(deleteButton);

		

		allListsHolder.appendChild(listItem);


		//bind the editTask to edit button
		editButton.onclick = editList;

		//bind the deleteTask to the delete button
		deleteButton.onclick = deleteList;

		lists.push({listName:taskString, incompleteTasks:null, completedTasks:null, listItem:null, listIndex: numLists});
		console.log("lists: " + lists);

		return listItem; //will need to append listItem later
	}

	var addList = function() {

		console.log("Add list...");
		//Is called when the Add List button is pressend

		//Create a new list item with the text from #new-list:
		if(newListInput.value) { //only adds a list if there is text in the input box
			var listItem = createNewListElement(newListInput.value); //the text inside the add item input box

			//Append listItem to allListsHolder
			allListsHolder.appendChild(listItem);

			lists[numLists].listItem = listItem;
			numLists++;
			console.log("lists array: " + lists);

			// bindTaskEvents(listItem); //changing where the item is binded when it is created
			bindListEvents(listItem);

			newListInput.value = ""; //clears the input text box after adding a new list
		}
	}



	//Edit an existing task
	var editList = function() {
		console.log("Edit list...");
		//Is called when the Edit button is pressed

		var listItem = this.parentNode;

		if (listItem.classList.contains('editMode')) {
			listItem.querySelector('button.edit').textContent = "Edit";
		} else {
			listItem.querySelector('button.edit').textContent = "Save";
		};
		

		var editInput = listItem.querySelector('input[type=text]');
		var listNameButton = listItem.querySelector('button.listName');

		//if the class of the parent is .editMode
		var containsClass = listItem.classList.contains('editMode');
		if(containsClass) {
			//Switch from .editMode
			//label text become the input's value
			listNameButton.textContent = editInput.value;
		} else { //else
			//Switch to .editMode
			//input value becomes the label's text
			editInput.value = listNameButton.textContent;
		}

		//Toggle .editMode on the parent (list item)
		listItem.classList.toggle('editMode');
	}



	//Delete an existing task
	var deleteList = function() {
		console.log("Delete list...");
		//Is called when the Delete button is pressed

		var listItem = this.parentNode;
		var ul = listItem.parentNode;

		//Remove the parent list item from the ul
		ul.removeChild(listItem);
	}



	var bindListEvents = function(taskListItem){
		console.log("Bind list item events...");
		//is called to bind the list item to a certain section (used in adding a task, or changing whether it is complete or incomplete)

		//select taskListItem's children
		var editButton = taskListItem.querySelector("button.edit");
		var deleteButton = taskListItem.querySelector("button.delete");

		//bind the editTask to edit button
		editButton.onclick = editList;

		//bind the deleteTask to the delete button
		deleteButton.onclick = deleteList;
	}







	// ****************
	// ****************
	// ****************
	// ****************
	// ****************
	// ****************
	// TASKS FUNCTIONS CODE
	// ****************
	// ****************
	// ****************
	// ****************
	// ****************
	// ****************






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

		editButton.textContent = "Edit";
		deleteButton.textContent = "Delete";
		label.textContent = taskString;
			//.innerHTML passes in a string of HTML and it won't encode any of the special characters.
			//.textContent passes in a string and it encodes special characters

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

		if(taskInput.value) { //only adds a task if there is text in the input box
			var listItem = createNewTaskElement(taskInput.value); //the text inside the add item input box

			//Append listItem to incompleteTasksHolder
			incompleteTasksHolder.appendChild(listItem);

			bindTaskEvents(listItem, taskCompleted); //changing where the item is binded when it is created

			taskInput.value = ""; //clears the input text box after adding a new task
		}
		


	}

	//Edit an existing task
	var editTask = function() {
		console.log("Edit task...");
		//Is called when the Edit button is pressed

		var listItem = this.parentNode;


		if (listItem.classList.contains('editMode')) {
			listItem.querySelector('button.edit').textContent = "Edit";
		} else {
			listItem.querySelector('button.edit').textContent = "Save";
		};
		

		var editInput = listItem.querySelector('input[type=text]');
		var label = listItem.querySelector('label');

		//if the class of the parent is .editMode
		var containsClass = listItem.classList.contains('editMode');
		if(containsClass) {
			//Switch from .editMode
			//label text become the input's value
			label.textContent = editInput.value;
		} else { //else
			//Switch to .editMode
			//input value becomes the label's text
			editInput.value = label.textContent;
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
		console.log("this: " + this);
		console.log("this.parentNode: " + this.parentNode);
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

		// if (checkBoxEventHandler) {
		// 	checkBox = true;
		// }

		//bind the editTask to edit button
		editButton.onclick = editTask;

		//bind the deleteTask to the delete button
		deleteButton.onclick = deleteTask;

		//bind the checkBoxEventHandler to the checkbox
		checkBox.onchange = checkBoxEventHandler; //.onchange --> sets and returns the event handler for the change event
	}




	// ****************
	// ****************
	// ****************
	// ****************
	// ****************
	// ****************
	// ALWAYS RUN CODE
	// ****************
	// ****************
	// ****************
	// ****************
	// ****************
	// ****************

	addListButton.addEventListener("click", addList);
	addTaskButton.addEventListener("click", addTask);


	//cycle over lists
	var listItem = createNewListElement(lists[0].listName);
	allListsHolder.appendChild(listItem);
	lists[numLists].listItem = listItem;
	console.log("initial lists array: " + lists);
	// bindTaskEvents(listItem); //changing where the item is binded when it is created
	bindListEvents(listItem);
	console.log("just before viewTasks function run");
	viewTasks();

}
