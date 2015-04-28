
var newListInput; //#new-list
var addListButton; //#addListButton (for lists)
var allListsHolder; //ul - #allLists

var taskInput; //new-task
var addTaskButton; //#add-button (for tasks)
var allTasksHolder; //#allTasks

var incompleteTasksHolder; //ul - #incomplete-tasks
var completedTasksHolder; //ul - #completed-tasks


var numLists = 0; //counts the number of lists that have been created


var lists = [ //store the data for the lists and for when the tasks aren't shown

	// Example list item:
	// {listName:"firstList", incompleteTasks:null, completedTasks:null, listItem:null, listIndex: numLists}

];



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



	//Load the tasks in the task section
	var viewTasks = function() {
		console.log("View Tasks...");
		// Is called on the window load, and when a list name is clicked

		//shows the tasks section
		document.getElementById('allTasks').classList.remove("hideAllTasks");

		incompleteTasksHolder = document.getElementById('incomplete-tasks');
		completedTasksHolder = document.getElementById('completed-tasks');

		//checking if this is the initial setup run
		if (this == window)	{
			// do nothing
		} else {
			var self = this;
			listCounter = self.getAttribute('data-index');
			console.log("listCounter: " + listCounter);

		}

		// save incomplete tasks
		if ((incompleteTasksHolder.children.length) > 0) {
			lists[currentTaskList].incompleteTasks = incompleteTasksHolder.innerHTML;
			incompleteTasksHolder.innerHTML = "";
		};
		// save completed tasks
		if ((completedTasksHolder.children.length) > 0) {
			lists[currentTaskList].completedTasks = completedTasksHolder.innerHTML;
			completedTasksHolder.innerHTML = "";
		};
		// load incomplete tasks
		if ((lists[listCounter].incompleteTasks) != null) {
			incompleteTasksHolder.innerHTML = lists[listCounter].incompleteTasks;
		};
		// load completed tasks
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
			//set checkboxes to be "on"
			completedTasksHolder.children[i].querySelector("input[type=checkbox]").checked = true;
		}

		currentTaskList = listCounter;

		document.getElementById('taskListTitle').innerHTML = lists[listCounter].listName + " Tasks";

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

		//Each element needs modifying
		editInput.type = "text";

		listNameButton.className = "listName";
		listNameButton.setAttribute("data-index", numLists);
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

		// Create a new list object in the lists array
		lists.push({listName:taskString, incompleteTasks:null, completedTasks:null, listItem:null, listIndex: numLists});
		console.log("lists: " + lists);

		return listItem; //will be used to append listItem later
	}


	//Add a new list
	var addList = function() {
		console.log("Add list...");
		//Is called when the Add List button is pressend

		//Create a new list item with the text from #new-list:
		if(newListInput.value) { //only adds a list if there is text in the input box
			var listItem = createNewListElement(newListInput.value); //the text inside the add item input box

			//Append listItem to allListsHolder
			allListsHolder.appendChild(listItem);
			lists[numLists].listItem = listItem;

			bindListEvents(listItem); //changing where the item is bound when it is created

			newListInput.value = ""; //clears the input text box after adding a new list
			numLists++;
		}
	}



	//Edit an existing list
	var editList = function() {
		console.log("Edit list...");
		//Is called when the Edit button is pressed

		var listItem = this.parentNode;

		// Changing the "Edit" button text from Edit to Save
		if (listItem.classList.contains('editMode')) {
			listItem.querySelector('button.edit').textContent = "Edit";
		} else {
			listItem.querySelector('button.edit').textContent = "Save";
		};
		

		var editInput = listItem.querySelector('input[type=text]');
		var listNameButton = listItem.querySelector('button.listName');

		//get the index of this list object
		listCounter = listItem.querySelector('button.listName').getAttribute('data-index');

		//if the class of the parent is .editMode
		var containsClass = listItem.classList.contains('editMode');
		if(containsClass) {
			//Switch from .editMode
			//label text become the input's value
			listNameButton.textContent = editInput.value;

			//Change name of list in the lists object array.
			lists[listCounter].listName = editInput.value;

			//if the list is open, change the title of the tasks list in the tasks section
			if (document.getElementById('taskListTitle').innerHTML = listItem.querySelector('button.listName')) {
				document.getElementById('taskListTitle').innerHTML = editInput.value;
			}
		} else { //else
			//Switch to .editMode
			//input value becomes the label's text
			editInput.value = listNameButton.textContent;
		}

		//Toggle .editMode on the parent (list item)
		listItem.classList.toggle('editMode');
	}



	//Delete an existing list
	var deleteList = function() {
		console.log("Delete list...");
		//Is called when the Delete button is pressed

		var listItem = this.parentNode;
		var ul = listItem.parentNode;

		//Remove the parent list item from the ul
		ul.removeChild(listItem);

		// if we delete the last list, hide the tasks section
		allListsHolder = document.getElementById('allLists');
		if (allListsHolder.children.length > 0) {
			//do nothing
		} else {
			document.getElementById('taskListTitle').innerHTML = "";
			document.getElementById('allTasks').classList.add("hideAllTasks");
		}

		// if we delete the list that is currently open, hide the tasks section
		if (document.getElementById('taskListTitle').innerHTML = listItem.querySelector('button.listName')) {
			document.getElementById('allTasks').classList.add("hideAllTasks");
		}
	}



	var bindListEvents = function(taskListItem){
		console.log("Bind list item events...");
		//is called to bind the list to a certain section (used in adding a list)

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
		console.log("Create new task element...");
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
		//button.delete
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


		return listItem; //will need to use to append listItem later
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

			bindTaskEvents(listItem, taskCompleted); //changing where the item is bound when it is created

			taskInput.value = ""; //clears the input text box after adding a new task
		}
		


	}

	//Edit an existing task
	var editTask = function() {
		console.log("Edit task...");
		//Is called when the Edit button is pressed

		var listItem = this.parentNode;

		// Changing the "Edit" button text from Edit to Save
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
		//Is called when the checkbox is pressed

		//Append the task list item to the #completed-tasks
		var listItem = this.parentNode;
		completedTasksHolder.appendChild(listItem);

		bindTaskEvents(listItem, taskIncomplete); //changing where the item is bound when it is already created
	}



	//Mark a task as incomplete
	var taskIncomplete = function() {
		console.log("Task incomplete...");
		//Is called when the checkbox is unchecked

		//Append the task list item to the #incomplete-tasks
		var listItem = this.parentNode;
		incompleteTasksHolder.appendChild(listItem);

		bindTaskEvents(listItem, taskCompleted); //changing where the item is bound when it is already created
	}


	var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
		console.log("Bind list item events");
		//is called to bind the list item to a certain section (used in adding a task, or changing whether it is complete or incomplete)

		//select taskListItem's children
		var checkBox = taskListItem.querySelector("input[type=checkbox]"); //querySelector() --> Returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors.
		var editButton = taskListItem.querySelector("button.edit");
		var deleteButton = taskListItem.querySelector("button.delete");

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
	// CODE ALWAYS RUN ON THE WINDOW LOAD
	// ****************
	// ****************
	// ****************
	// ****************
	// ****************
	// ****************


	//set the event listeners on the two add buttons
	addListButton.addEventListener("click", addList);
	addTaskButton.addEventListener("click", addTask);


	//Create the default list
	var listItem = createNewListElement("Default List");
	allListsHolder.appendChild(listItem);
	lists[numLists].listItem = listItem;
	console.log("initial lists array: " + lists);
	bindListEvents(listItem);
	numLists++;
	viewTasks();

}
