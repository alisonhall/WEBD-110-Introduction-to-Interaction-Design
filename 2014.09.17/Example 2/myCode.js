
/*************** Example 1 ***************/
/*** Prompt practical example ***/

// var cost = 0;
// var item = prompt(" today we have apples ($1) oranges ($2) & kiwi ($4)\n what do you want to buy?");
// item=item.toLowerCase();
// console.log(item);
// if(item=="apples"||item=="apple"){
// 	cost=cost+1;
// } else if (item=="oranges"||item=="orange"){
// 	cost=cost+2;
// } else if (item=="kiwi"||item=="kiwis"){
// 	cost=cost+4;
// } else {
// 	alert("I do not understand");
// }
// console.log(cost);



/*************** Example 2 ***************/
/*** Prompt and functions practical example ***/

var cost = 0;

function fruitSelect(){
	var item = prompt(" today we have apples ($1) oranges ($2) & kiwi ($4)\n what do you want to buy?");
	item=item.toLowerCase();
	console.log(item);
	if(item=="apples"||item=="apple"){
		cost=cost+1;
	} else if (item=="oranges"||item=="orange"){
		cost=cost+2;
	} else if (item=="kiwi"||item=="kiwis"){
		cost=cost+4;
	} else {
		alert("I do not understand");
	}
	console.log(cost);
}

fruitSelect();
fruitSelect();
fruitSelect();