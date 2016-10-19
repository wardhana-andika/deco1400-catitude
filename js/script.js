<!--
/* Andika Wardhana 43034655 **** html comment tag placed to prevent error on javascript-less browsers */

/* start of own functions */

/* hide/show divs in faqs.html and services.html */
/* show 1 div is achieved by hiding all, then show 1*/

/* runs when services.html loads*/
function initservices(){
	hideallservices();
	document.getElementById("counseling").style.display = "block";
}

function hideallservices(){
	document.getElementById("counseling").style.display = "none";
	document.getElementById("catschool").style.display = "none";
	document.getElementById("dietician").style.display = "none";
	document.getElementById("housecalls").style.display = "none";
}

/* runs when faqs.html loads*/
function inittips(){
	hidealltips();
	document.getElementById("cattips").style.display = "block";
}

function hidealltips(){
	document.getElementById("cattips").style.display = "none";
	document.getElementById("symfinder").style.display = "none";
}

/*  services.html local links */
function clickcounseling() {
	hideallservices();
	document.getElementById("counseling").style.display = "block";
}

function clickcatschool() {
	hideallservices();
	document.getElementById("catschool").style.display = "block";
}

function clickdietician() {
	hideallservices();
	document.getElementById("dietician").style.display = "block";
}

function clickhousecalls() {
	hideallservices();
	document.getElementById("housecalls").style.display = "block";
}

/* faqs.html local links */
function clickcattips() {
	hidealltips();
	document.getElementById("cattips").style.display = "block";
}

function clicksymfinder() {
	hidealltips();
	document.getElementById("symfinder").style.display = "block";
}

function inithome(){
	document.getElementsByClassName("slidesjs-previous").innerHTML ="<";
}


/* end of own functions */

/* the following two functions are partially own work */
/* regex courtesy of stackoverflow.com by user Fabian http://stackoverflow.com/questions/2507030/email-validation-using-jquery */

/* validates forms by checking if essential fields are empty, then checks email address format */
/* validates enquiry form */
function validateForm1() {
    var x = document.forms["enquiry"]["name"].value;
	var y = document.forms["enquiry"]["email"].value;
	var z = document.forms["enquiry"]["message"].value;
    if (x == null || x == "" || y == null || y == "" || z == null || z == "") {
        alert("Name, Email, and Enquiry message cannot be empty");
        return false; 
    }
	
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (regex.test(y))  
	  {  
		return true;
	  }  
		alert("You have entered an invalid email address.")  
		return false;
}

/* validates booking form */
function validateForm2() {
    var x = document.forms["booking"]["name"].value;
	var y = document.forms["booking"]["phone"].value;
	var z = document.forms["booking"]["email"].value;
    if (x == null || x == "" || y == null || y == "" || z == null || z == "") {
        alert("Name, Email, and Enquiry message cannot be empty");
        return false;
    }
	
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (regex.test(z))  
	  {  
		return true;
	  }  
		alert("You have entered an invalid email address.")  
		return false;
}


/*  google maps javascript source: https://developers.google.com/maps/documentation/javascript/ */
function initialize() {
  var myLatlng = new google.maps.LatLng(-27.570617,153.060514);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}


google.maps.event.addDomListener(window, 'load', initialize);


/* jquery 2.1.4 is used for image slideshow http://jquery.com/download/ */
/* jquery-based function(s), slideshow plugin courtesy of http://slidesjs.com/ */

$(function(){
  $("#homeslides").slidesjs({
	width: 400,
	height: 400
  });
});


-->