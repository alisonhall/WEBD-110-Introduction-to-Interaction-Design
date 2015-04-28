var numApples = 0;
var numOranges = 0;
var numKiwi = 0;

function showOrder (){
	document.getElementById('yourOrder').value = "Your order is: \n"+numApples+" apples, \n"+numOranges+" oranges, \n"+numKiwi+" kiwi.";
}

document.getElementById('submit').onclick = function (){
	alert("Hi "+document.getElementById('userName').value);
}

document.getElementById('buyApple').onclick = function (){
	numApples++;
	showOrder();
}

document.getElementById('buyOrange').onclick = function (){
	numOranges++;
	showOrder();
}

document.getElementById('buyKiwi').onclick = function (){
	numKiwi++;
	showOrder();
}
