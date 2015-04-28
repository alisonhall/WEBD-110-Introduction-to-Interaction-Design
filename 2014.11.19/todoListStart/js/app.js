console.log(document.getElementById('incomplete-tasks').children.length);

var incompleteTasks = document.getElementById('incomplete-tasks');

// // Example For loop
// var numTimesToRun = 5;
// for (var counter = 0; counter < numTimesToRun; counter = counter + 1) {
// 	// do this numTimesToRun times
// }

for (var i=0; i<incompleteTasks.children.length; i++) {
	var task = incompleteTasks.children[i];
	task.querySelector("input[type=checkbox]").checked = true;
};

