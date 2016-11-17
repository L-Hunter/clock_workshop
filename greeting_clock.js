function clock(){
// pull in time
var today = new Date()
//set variables to time increments
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();

//update h m s to check for double digits, set variable to doubleDigits(variable)
h = doubleDigits(h);
m = doubleDigits(m);
s = doubleDigits(s);

//define hexcolor
// var hexColor = "#" + h + m + s;
var time = h + ":" + m + ":" + s;

//insert into html page
document.getElementById("time").innerHTML = time;
greeting();
// update css
background()

//refresh time
setTimeout(clock, 1000);
}

//check for double digits and add 0 if necessary
function doubleDigits(i){
	if (i < 10){
		i = "0" + i;
	}
		return i;
}

clock();

function greeting(){
	var today = new Date()
	var h = today.getHours();	
	if (h < 12) {
		document.getElementById("greeting").innerText = "Good Morning!";
	}
	else if (h < 17) {
		document.getElementById("greeting").innerText = "Good Afternoon!";
	}
	else {
		document.getElementById("greeting").innerText = "Good Evening!";
	}
}

// function background(){
// var number = Math.floor(Math.random() * 5) + 1;
// var name = "img_" + number;
// document.getElementById("background").src= images + "/" + name ;
// }