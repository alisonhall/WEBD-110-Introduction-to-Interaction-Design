var highScore = {score:100, userName:"GGG"};
//highScore.userName;

var Zombie = function (type){
	var self = this;
	self.type = type;
	self.strength = 100;
	self.image = document.createElement ("IMG");
	self.image.src = "zombieImages/zombie.png";
	document.getElementById('zombieDiv').appendChild(self.image);
	self.hit = function (){
		self.image.src = "zombieImages/zombieBam.png";
	}
	self.image.onclick = function (){
		self.hit();
	}
}

var firstZombie = new Zombie("bad");
var secondZombie = new Zombie("good");
var thirdZombie = new Zombie("good");