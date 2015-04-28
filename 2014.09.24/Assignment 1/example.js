var myQuestions = [
	{question: "Would you like a (1) dell or (2) apple", answers:["dell","apple"], costs:[500, 900]}, 
	{question: "Would you like a (1) standard HD or (2) extended", answers:["standard", "HD"], costs:[100, 200]}
	];

var cost = 0;
for (var i=0; i<myQuestions.length; i++){
	var response = prompt(myQuestions[i].question);
	cost = cost + myQuestions[i].costs[response-1];
}

console.log(cost);



