

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




var myQuestions = [
	{
		question: "Select your initial model of computer. \n(1) Dell Inspiron - $500 \n(2) Dell Precision - $1000", options: ["Dell Inspiron", "Dell Precision"], costs: [500, 1000]
	},
	{
		question: "Select your processor. \n(1) Intel Xeon Processor - $300 \n(2) Intel i7 - $200 \n(3) Intel i5 - $100 \n(4) Intel i3 - $0", options: ["Intel Xeon Processor", "Intel i7", "Intel i5", "Intel i3"], costs: [300, 200, 100, 0]
	}
]



var inputOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// var initialModelOptions = ["\n(1) Dell Inspiron - $500", "\n(2) Dell Precision - $1000"];
// var initialModelCosts = [500, 1000];
// var processorOptions = ["\n(1) Intel Xeon Processor - $300", "\n(2) Intel i7 - $200", "\n(3) Intel i5 - $100", "\n(4) Intel i3 - $0"];
// var processorCosts = [300, 200, 100, 0];







function computerOptions(j){
	selected = 0;
	error = 0;
	selected = prompt(myQuestions[j].question);
	console.log(selected);
	selected = selected-1;

	for (i = 0; i < inputOptions.length; i++){
		if (i == selected){
			computer.initialModel = myQuestions[j].options[i];
			cost = cost + myQuestions[j].costs[i];
			console.log("Cost updated");
			break;
		} else if (i == inputOptions.length){
			error = 1;
			console.log("Error in input");
			alert("That reply was not recognized. Please try again.");
		} else {
			console.log("No change in cost");
		}
	}
}







// function initialModelSelect (){
// 	selected = 0;
// 	error = 0;
// 	selected = prompt(myQuestions[j].question);
// 	console.log(selected);
// 	selected = selected-1;

// 	for (i = 0; i < inputOptions.length; i++){
// 		if (i == selected){
// 			computer.initialModel = myQuestions[j].options[i];
// 			cost = cost + myQuestions[j].costs[i];
// 			console.log("Cost updated");
// 			break;
// 		} else if (i == inputOptions.length){
// 			error = 1;
// 			console.log("Error in input");
// 			alert("That reply was not recognized. Please try again.");
// 		} else {
// 			console.log("No change in cost");
// 		}
// 	}
// }

// function processorSelect (){
// 	selected = 0;
// 	error = 0;
// 	selected = prompt("Select your processor. \n" + processorOptions);
// 	console.log(selected);
// 	selected = selected-1;

// 	for (i = 0; i < inputOptions.length; i=i+1){
// 		if (i == selected){
// 			computer.processor = processorOptions[i];
// 			cost = cost + processorCosts[i];
// 			//console.log("Cost updated");
// 			break;
// 		} else if (i < selected){
// 			error = 1;
// 			//console.log("Error in input");
// 			alert("That reply was not recognized. Please try again.");
// 		} else {
// 			//console.log("No change in cost");
// 		}
// 	}
// }


alert("To Buy a Computer. \nTo select an option, please type in the number that appears beside the option you want.");


for(var k=0;k<myQuestions.length;k++){
	error = 1;
	while (error==1){
		computerOptions(k);
	}
}



// error = 1;
// while (error==1){
// 	processorSelect();
// }


console.log(computer);
console.log(cost);
