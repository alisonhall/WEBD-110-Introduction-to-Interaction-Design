

var cost = 0;
var selected = 0;
var error = 1;

var computer = {
	initialModel: null,
	processor: null,
	memory: null,
	windowsSystem: null,
	microsoftOffice: null,
	antivirus: null,
	hardDrive: null,
	keyboard: null,
	mouse: null,
	monitor: null,
	warranty: null
}

// var options = {
// 	inputOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9],
// 	initialModelOptions: ["(1) Dell Inspiron - $500", "(2) Dell Precision - $1000"],
// 	processorOptions: ["(1) Intel Xeon Processor - $300", "(2) Intel i7 - $200", "(3) Intel i5 - $100", "4) Intel i3 - $0"]
// }

// var allCosts = {
// 	initialModelCosts: [500, 1000],
// 	processorCosts: [300, 200, 100, 0]
// }


var inputOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var initialModelOptions = ["(1) Dell Inspiron - $500", "(2) Dell Precision - $1000"];
var initialModelCosts = [500, 1000];
var processorOptions = ["(1) Intel Xeon Processor - $300", "(2) Intel i7 - $200", "(3) Intel i5 - $100", "4) Intel i3 - $0"];
var processorCosts = [300, 200, 100, 0];


function initialModelSelect (){
	selected = 0;
	error = 0;
	selected = prompt("Select your initial model of computer. /" + initialModelOptions);
	console.log(selected);
	for (i = 0; (i = (selected-1)) || (i = inputOptions.length); i++){
		if (i = selected - 1){
			computer.initialModel = initialModelOptions[i];
			cost = cost + initialModelCosts[i];
			console.log("Cost updated");
		} else if (i = inputOptions.length){
			error = 1;
			console.log("Error in input");
			alert("That reply was not recognized. Please try again.");
		} else {
			console.log("No change in cost");
		}
	}
}

function processorSelect (){
	selected = 0;
	error = 0;
	selected = prompt("Select your processor. " + processorOptions);
	console.log(selected);
	for (i = 0; i==selected-1 || i==inputOptions.length; i++){
		if (i==selected-1){
			computer.processor = processorOptions[i];
			cost = cost + processorCosts[i];
			console.log("Cost updated");
		} else if (i==inputOptions.length){
			error = 1;
			console.log("Error in input");
			alert("That reply was not recognized. Please try again.");
		} else {
			console.log("No change in cost");
		}
	}
}


error = 1;
while (error==1){
	initialModelSelect();
}

error = 1;
while (error==1){
	processorSelect();
}


console.log(computer);
console.log(cost);
