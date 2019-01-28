
$(document).ready(function(){
    if ($(window).width() < 755) {
var $subMenuSet=$("ul#menu li ul");

function clearMenu(){
	for(var i=0;i<$subMenuSet.length;i++){
		$subMenuSet[i].style.display="none";
	}
};

//Javascrpit for the mobile version menu bar
$("#nav-status").click(function() {
	clearMenu();
	$("#menu").toggle("600");
});



//for the function two layer menu bar in mobile version
$("#aboutButtton").click(function() {
	clearMenu();
	$("#aboutMenu").toggle("400");
});


//for the function two layer menu bar in mobile version
$("#staffButtton").click(function() {
	clearMenu();
	$("#staffMenu").toggle("400");
});

//for the function two layer menu bar in mobile version
$("#programmesButton").click(function() {
	clearMenu();
	$("#programeMenu").toggle("400");
});

//for the function two layer menu bar in mobile version
$("#blogButtton").click(function() {
	clearMenu();
	$("#blogMenu").toggle("400");
});

//for the function two layer menu bar in mobile version
$("#contactButtton").click(function() {
	clearMenu();
	$("#contactMenu").toggle("400");
});
}
});
