var user = {score: 0, life: 10};

// the object is the instructions for creating. The first letter is capitalized to show that it is an object.
var ZombieObject = function (){
	var self = this;
	self.name = "default";
	self.type = "bad";
	self.hasBit = false;
	self.image = document.createElement("IMG");
	self.image.src = "images/zombie.png";
	self.image.style.position = "absolute";
	self.image.style.top = Math.random() * 500 + "px";
	self.image.style.left = Math.random() * 500 + "px";
	document.getElementById('zombieDiv').appendChild(self.image);
	self.move = function(){
		self.image.style.top = Math.random() * 500 + "px";
		self.image.style.left = Math.random() * 500 + "px";
	}
	self.timer = setInterval(self.move, 1000);
	self.hit = function(){
		if (self.hasBit == true){
			// do nothing
		} else {
			self.image.src = "images/zombieBam.png";
			clearInterval (self.timer);
			clearTimeout(self.biteCountDown);
			user.score = user.score + 1;
		}
		// var zombie = new ZombieObject();
	}
	self.image.onclick = self.hit;

	self.bite = function(){
		self.image.src = "images/zombieEat.png";
		clearInterval (self.timer);
		self.hasBit = true;
		user.life = user.life - 1;
		if (user.life == 0){
			alert ("GAME OVER");
			clearInterval(newZombieTimer);
		}
	}
	self.biteCountDown = setTimeout (self.bite, 5000);
};

var newZombieTimer = setInterval(createZombie, 5000);
function createZombie(){
	var zombie = new ZombieObject();
}

// the instance is the actual created thing
var zombieInstance = new ZombieObject();
zombieInstance.name = "greg";
var zombie2Instance = new ZombieObject();
zombie2Instance.name = "frank";
