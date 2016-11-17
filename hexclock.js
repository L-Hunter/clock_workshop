
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
//insert into html page
document.getElementById("time").innerHTML = "#" + h + m + s;
//refresh time
setTimeout(clock, 1000);
}

//check for double digits and add 0 if necessary
function doubleDigits(t){
	if (t < 10){
		t = "0" + t;
	}
// if already double digits do nothing
	else {
		return t;
	}
}

clock();