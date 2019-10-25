// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
	console.log("window is loaded");
});

let button = document.getElementById("takeoff");
let status = document.getElementById("flightStatus");
let background = document.getElementById("shuttleBackground");
let height = document.getElementById("spaceShuttleHeight");
let heightChange = Number(height.innerHTML);

button.onclick = function(){
    let a = window.confirm("Confirm that the shuttle is ready for takeoff");
    if (a == true) {
	status.innerHTML = "Shuttle in flight";
    background.style.backgroundColor = "blue";
    heightChange += 10000;
    height.innerHTML = heightChange
	}
};

document.getElementById("landing").onclick = function(){
	window.alert("The shuttle is landing. Landing gear engaged.");
	status.innerHTML = "The shuttle has landed";
    background.style.backgroundColor = "green";
    heightChange = 0;
    height.innerHTML = heightChange
    
};

document.getElementById("missionAbort").onclick = function(){
    let b = window.confirm("Confirm that you want to abort the mission");
    if (b == true) {
		status.innerHTML = "Mission aborted";
        background.style.backgroundColor = "green";
        heightChange = 0
        height.innerHTML = heightChange;
	}
};
let element = document.getElementById("rocket")
var set = 0, offset;
document.getElementById("left").onclick = function () {
    set += 10;
    var offset = String(set) + "px";
    element.style.left = offset;
};
document.getElementById("right").onclick = function(){
    
    set += 10;
    offset = String(set) + "px";
    element.style.right = offset;
};
document.getElementById("up").onclick = function(){
    heightChange += 10000;
    height.innerHTML = heightChange;
};
document.getElementById("down").onclick = function(){
    heightChange -= 10000;
    height.innerHTML = heightChange;
};
