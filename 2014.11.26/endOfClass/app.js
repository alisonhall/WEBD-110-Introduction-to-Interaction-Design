// add task... 
var taskInput = document.getElementById('new-task');
var addButton = document.getElementById('addButton');
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completeTaskHolder = document.getElementById('completed-tasks');


// separating the data from the layout
var tasks = [
    {taskName: "do laundry", priority: 2},
    {taskName: "do laundry 2", priority: 2}
];



// when user presses the 'add button'
var addTasks = function (){
    var listItem = createNewTaskElement(taskInput.value)
    incompleteTaskHolder.appendChild(listItem);
}

addButton.onclick = addTasks;

var taskComplete = function (){
    var listItem = this.parentNode;
    completeTaskHolder.appendChild (listItem);
}

var createNewTaskElement = function(taskString){
  // create new task within the incomplete list
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.onclick = taskComplete;
    var label = document.createElement("label");
    label.textContent = taskString;
    var editInput = document.createElement("input");
    editInput.type = "text";
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete"
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(deleteButton);
    return listItem;
}


//using data from the array-object
for (var i=0; i<tasks.length; i++) {
    var listItem = createNewTaskElement(tasks[i].taskName)
    incompleteTaskHolder.appendChild(listItem);
}


for (var i=0; i<incompleteTaskHolder.children.length; i++) {
    var task = incompleteTaskHolder.children[i];
    task.querySelector("input[type=checkbox]").onclick = taskComplete;
};
// taskListItem.querySelector ("input[type=checkBox]");
// taskListItem.querySelector ("button.delete");