
var user = {matched: 0, total: 0};
var maxSets = 25;
var numSets;
var cardNum = 0;
var firstCard;
var secondCard;
var firstId;
var secondId;
var array = [];
var cardDivElement = document.getElementById('cardDiv')
var newDivElement;
document.getElementById('matched').value = 0;
document.getElementById('total').value = 0;


/////////////// Get and setup the number of sets the user wants to match /////////////////
var start = function() {
	console.log("start function called");
	removeCards();
	numSets = document.getElementById('numSets').value;
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

/////////////// Create an array of numbers to be used to reference cards /////////////////
var createArray = function(numSets) {
	console.log("createArray function called");
	for (var i = 0; i < numSets; i++) {
		array.push(i+1);
		array.push(i+1);
	}
	console.log("Array after creation: " + array);
}

/////////////// Remove any cards already on the page / Reset the game /////////////////
var removeCards = function(){
	console.log("removeCards function called");
	while (cardDivElement.firstChild) {
	  cardDivElement.removeChild(cardDivElement.firstChild);
	}
	console.log("cardDiv: " + cardDiv);
	user.matched = 0;
	user.total = 0;
	cardNum = 0;
	array = [];
	document.getElementById('matched').value = 0;
	document.getElementById('total').value = 0;
}

/////////////// Create the cards /////////////////
var createCards = function(arg1){
	console.log("createCards function called");
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
	self.newDiv.id = "newDiv" + arg1;
	self.newDiv.appendChild(self.sideA);
	self.newDiv.appendChild(self.sideB);

	newDivElement = self.newDiv;

	// Event Listener
	newDivElement.addEventListener('click',function() {
	    flip(event, self.imageB.className, self, self.newDiv.id);
	},false);

	cardDivElement.appendChild(self.newDiv);
	array[self.set] = null;
}

/////////////// Flipping the cards when they are clicked /////////////////
var flip = function(event, imageClassName, self, id) {
	console.log("flip function called");
	var clickInfo = [];
	clickInfo.push(imageClassName);

	if (self.className == "hasClicked") {
		return;
	}
	event.currentTarget.className = "hasClicked";
	
	self.noMatch = function() {
		console.log("noMatch function called");
		var firstDivId = document.getElementById(firstId);
		var secondDivId = document.getElementById(secondId);

		firstDivId.className = "newDiv";
		secondDivId.className = "newDiv";
	}

	if (cardNum == 0) {
		firstId = id;
		firstCard = clickInfo.pop();
		cardNum = 1;
	} else if (cardNum == 1) {
		secondId = id;
		secondCard = clickInfo.pop();
		cardNum = 0;

		/////////////// Check if the two cards are a match /////////////////
		if (firstCard == secondCard) {
			console.log("IS MATCH");
			user.matched++;
			user.total++;
			document.getElementById('matched').value = user.matched;
			document.getElementById('total').value = user.total;
			clearTimeout(self.noMatchTimer);
			if (user.matched == numSets) {
				alert("Congratulations! \nYou have matched all of the cards! \nYou matched " + user.matched + " cards, in a total of " + user.total + " tries.");
			}
		} else {
			self.noMatch;
			self.noMatchTimer = setTimeout(self.noMatch, 1000);
			console.log("NO MATCH");
			user.total++;
			document.getElementById('total').value = user.total;
		}
	}
}


document.getElementById('startButton').addEventListener("click", start);
