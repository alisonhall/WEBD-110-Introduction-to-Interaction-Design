

var NewCard = function(arg1, arg2){
	var self = this;
	self.name = "thisCard" + arg1;
	console.log("new card object");
	var maxSets = array.length;
	var hasElement = false;
	while (hasElement == false){
		self.set = Math.round(Math.random() * maxSets);
		self.value = array[self.set];
		if (self.value == null){
			// do nothing
		} else {
			var total = newArray1.push(self.value);
			array[self.set] = null;
			hasElement = true;
		}
	}
	self.image = document.createElement("IMG");
	self.image.src = "images/" + self.set + ".jpg";
	document.getElementById('cardDiv').appendChild(self.image);
	console.log(array);
	console.log(newArray1);
	// console.log(newArray2);
	// console.log(removed);
}

var maxCards = 20;
// var maxSets = (maxCards/2)-1;

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray1 = [];
// var newArray2 = [];

for (var i = 0; i<maxCards; i++){
	var card = new NewCard(i, maxCards);
}

