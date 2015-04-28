
var user = {matched: 0, total: 0};
var maxSets = 25;
var cardNum = 0;
var firstCard;
var secondCard;
var array = [];
var cardDivElement = document.getElementById('cardDiv')
var newDivElement;
var flippedCards = [];
document.getElementById('matched').value = 0;
document.getElementById('total').value = 0;


var start = function() {
	removeCards();
	var numSets = document.getElementById('numSets').value;
	console.log("numSets: " + numSets);

	if(numSets < (maxSets+1)) {
		var maxCards = numSets * 2;
		createArray(numSets);

		for (var i = 0; i<maxCards; i++){
			var card = new createCards(i);
		}
		console.log("Array after use: " + array);
	} else {
		alert ("The number of sets you want to match was not recognized. \nPlease enter a number between 1 and " + maxSets);
	}
}

var createArray = function(numSets) {
	for (var i = 0; i < numSets; i++) {
		array.push(i+1);
		array.push(i+1);
	}
	console.log("Array after creation: " + array);
}

var removeCards = function(){
	while (cardDivElement.firstChild) {
	  cardDivElement.removeChild(cardDivElement.firstChild);
	}
	console.log("cardDiv: " + cardDiv);
	user.matched = 0;
	user.total = 0;
	cardNum = 0;
	array = [];
	flippedCards = [];
	document.getElementById('matched').value = 0;
	document.getElementById('total').value = 0;
}

var createCards = function(arg1){
	var self = this;
	self.name = "thisCard" + arg1;
	var numCards = array.length;
	var hasElement = false;
	while (hasElement == false){
		self.set = Math.round(Math.random() * numCards);
		self.value = array[self.set];
		if (self.value == null){
			// do nothing
		} else {
			hasElement = true;
		}
	}

	// side A
	self.sideA = document.createElement("div");
	self.sideA.className = "sideA";
	self.imageA = document.createElement("img");
	self.imageA.src = "images/unknown.png";
	self.imageA.className = "unknown";
	self.sideA.appendChild(self.imageA);

	// side B
	self.sideB = document.createElement("div");
	self.sideB.className = "sideB";
	self.imageB = document.createElement("img");
	self.imageB.src = "images/picture" + self.value + ".png";
	self.imageB.className = self.value;
	self.imageB.id = self.value;
	self.sideB.appendChild(self.imageB);

	// new Div
	self.newDiv = document.createElement("div");
	self.newDiv.className = "newDiv";
	self.newDiv.appendChild(self.sideA);
	self.newDiv.appendChild(self.sideB);

	newDivElement = self.newDiv;
	newDivElement.addEventListener("click", flip);

	cardDivElement.appendChild(self.newDiv);
	array[self.set] = null;
}

var flip = function() {
	var self = this;
	if (self.className == "hasClicked") {
		return;
	}
	flippedCards.push(this);
	self.className = "hasClicked";
	
	self.noMatch = function() {
		self.className = "newDiv";
		console.log("noMatch function called");
		////////////NEED TO SET BOTH OF THE CLASSES BACK TO newDiv, NOT JUST THE ONE (SOMETIMES)
	}

	// self.isMatch = function() {
	// 	self.className = "matched";
	// 	console.log("isMatch function called");
	// }

	if (cardNum == 0) {
		firstCard = flippedCards.pop();
		/////////NEED TO SET THE firstCard TO BE UNIQUE TO THE CARD
		console.log("firstCard: " + firstCard);
		cardNum = 1;
	} else if (cardNum == 1) {
		secondCard = flippedCards.pop();
		/////////NEED TO SET THE secondCard TO BE UNIQUE TO THE CARD
		console.log("secondCard: " + secondCard);
		cardNum = 0;
		if (firstCard == secondCard) {
			// self.isMatch;
			console.log("IS MATCH");
			clearTimeout(self.noMatchTimer);
			user.matched++;
			user.total++;
			document.getElementById('matched').value = user.matched;
			document.getElementById('total').value = user.total;
		} else {
			self.noMatch;
			self.noMatchTimer = setTimeout(self.noMatch, 2000);
			console.log("NO MATCH");
			user.total++;
			document.getElementById('total').value = user.total;
		}
	}
}






document.getElementById('startButton').addEventListener("click", start);
