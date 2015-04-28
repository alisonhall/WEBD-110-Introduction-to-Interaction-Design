
/*************** Example 1 ***************/
/*** If statement example ***/

// var userName;
//
// if (userName == null){
// 	alert("Welcome");
// }
// console.log ("worked");


/*************** Example 2 ***************/
/*** If, else if, else statement example ***/

// var userName = "Alison";
//
// if (userName == null){
// 	alert("Welcome");
// 	alert("Good to meet you");
// } else if (userName=="greg"){
// 	alert ("Welcome back Greg!");
// } else {
// 	alert ("Welcome back");
// };
// console.log ("worked");
// console.log ("my user is "+ userName);


/*************** Example 3 ***************/
/*** For loop example, console shows 0-9 ***/

// for (var i = 0; i<10; i++){
// 	console.log(i);
// };


/*************** Example 4 ***************/
/*** For loop, console shows 0-99 ***/

// for (var i = 0; i<100; i++){
// 	console.log(i);
// };


/*************** Example 5 ***************/
/*** For loop with if statements. ***/
/*** Console shows 0-9, except 3 is replaced by "found" and 8 is replaced by "it" ***/

// for (var i = 0; i<10; i++){
// 	if (i==3){
// 		console.log("found");
// 	} else if (i==8){
// 		console.log("it");
// 	} else {
// 		console.log(i);
// 	}
// };


/*************** Example 6 ***************/
/*** For loop with if statements. ***/
/*** Console shows a triangle of stars ***/

var message="*";
for (var i = 0; i<20; i++){
	console.log(message);
	message=message+"*";
};