function clock(e){
	var today = new Date() // pull in time
	var h = today.getHours(); //set variables to time increments
	var m = today.getMinutes();
	var s = today.getSeconds();
	h = doubleDigits(h); //update h m s to check for double digits
	m = doubleDigits(m);
	s = doubleDigits(s);
	var time = h + ":" + m + ":" + s; //define time
	document.getElementById("time").innerHTML = time; //insert into html page
	greeting(); // run greeting
	setTimeout(clock, 1000); //refresh time
}

function doubleDigits(i){
	if (i < 10){
		i = "0" + i;
	}
	return i;
}

function greeting(e){
	var today = new Date();
	var h = today.getHours();

	if (h > 5 && h < 12) {
		document.getElementById("greeting").innerText = "Good Morning!";
	}
	else if (h < 18) {
		document.getElementById("greeting").innerText = "Good Afternoon!";
	}
	else if (h < 24) {
		document.getElementById("greeting").innerText = "Good Evening!";
	}
	else {
		document.getElementById("greeting").innerText = "Hey. Go back to sleep!";
	}
}


function backgroundChange(e){
	setTimeout(backgroundChange, 30000);
	var number = Math.floor(Math.random() * 5) + 1;
	document.getElementById("background").style.backgroundImage = "url('images/img_" + number + ".jpg')";
}

//below is a failed attempt to randomize background at specified times
//failed version 1
// function imgChange(e) {
// 	var today = new Date() // pull in time
// 	var h = today.getHours(); //set variables to time increments
// 	var m = today.getMinutes();
// 	var s = today.getSeconds();
// 	h = doubleDigits(h); //update h m s to check for double digits
// 	m = doubleDigits(m);
// 	s = doubleDigits(s);
// 	var t = h + m + s;
// 	if (t == 060000) {
// 		backgroundChange();
// 	}
// 	else if (t == 120000) {
// 		backgroundChange();
// 	}
// 	else if (t == 180000) {
// 		backgroundChange();
// 	}
// 	else if (t == 240000) {
// 		backgroundChange()
// 	}
// }

//failed version 2
// function imgChange(e) {
// 	var today = new Date() // pull in time
// 	var h = today.getHours(); //set variables to time increments
// 	var m = today.getMinutes();
// 	var s = today.getSeconds();
// 	h = doubleDigits(h); //update h m s to check for double digits
// 	m = doubleDigits(m);
// 	s = doubleDigits(s);
// 	var t = h + m + s;
// 	if (t == 060000 || 120000 || 180000 || 240000) {
// 		backgroundChange();
// 	}
//}

clock();
backgroundChange();
// imgChange();
