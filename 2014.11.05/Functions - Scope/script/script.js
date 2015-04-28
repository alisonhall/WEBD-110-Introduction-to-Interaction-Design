var globalVariable;

function someFunction (argument){
	var localVariable = 4;
	globalVariable = 10;
	console.log(argument);	// test
	console.log(localVariable); // 4
	console.log(globalVariable); // 10
}
someFunction("test");
// console.log(argument);	// error, no idea what you mean
// console.log(localVariable); // error
console.log(globalVariable); // 10