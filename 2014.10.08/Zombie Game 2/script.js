
var zombie = document.getElementById('zombieImg');
var zombieGhostTimer;
var zombieEatTimer = setTimeout(zombieEat, 5000);

function zombieClicked(zombieArg){
	zombieArg.src = "zombieImages/zombieBam.png";
	clearInterval (strobe);
	clearTimeout (zombieEatTimer);
	zombieGhostTimer = setTimeout(zombieGhost, 1000);
}

function zombieGhost(){
	zombie.src = "zombieImages/zombieGhost.png";
}

function zombieEat(){
	clearInterval (strobe);
	zombie.src = "zombieImages/zombieEat.png";
}

function zombieMove(){
	zombie.style.position = "absolute";
	zombie.style.left = Math.round(Math.random()*600) + "px";
	zombie.style.top = Math.round(Math.random()*600) + "px";
	zombie.style.transition = "all 0.5s ease";
}

var strobe;
// var strobe = setInterval("zombieMove()", 1000);


var newZombieHTML = document.createElement("IMG");  //<img>
newZombieHTML.src = "zombieImages/zombie.png";
document.getElementById('newZombieDiv').appendChild(newZombieHTML);
newZombieHTML.onclick = zombieClicked(newZombieHTML);
