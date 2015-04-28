
function callMe() {
	console.log("called!");
}

function addThese(num1, num2) {
	// var newNum = num1 + num2;
	// console.log('the number is '+ newNum);
	return num1+num2;
}
var addedNumber = addThese(4, 6);
console.log('addedNumber is '+addedNumber);


var complexData = {name:"Greg", job:"prof", faveColour:"magenta"};
function addUser (user){
	console.log(user.name);
}
addUser(complexData);
addUser({name:"Greg", job:"yes"});
