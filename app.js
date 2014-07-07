$(document).ready(function() {
$("#numberInput").click(function(){
	alert("Enter a number between 1 and 100");
});
$("#numberInput").keyup(function(event) {
		if(event.keyCode == 13) {
			for(i=1; i<=100 ; i++){
			if(i%15 == 0){
				$("body").append("<p>" + "fizz buzz");
			}
			else if(i%5 == 0){
				$("body").append("<p>" + "fizz");
			}
			else if(i%3 == 0){
				$("body").append("<p>" + "buzz");
			}
			else {
				$("body").append("<p>" + i);
			}
		}
	}
})
});