$(document).ready(function(){
	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-cool").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function(){
		$(".ryu-ready").hide();
		$(".ryu-cool").hide();
		$(".ryu-still").show();
	})
	.mousedown(function(){
		//play hadouken sound
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-cool").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
		//show hadouken and animate it to the right of the screen
		.animate({"left": "300px"}, 500,
			function(){
				$(this).hide();
				$(this).css("left", "-212px");
			}
		);
	})
	.mouseup(function(){
		//ryu goes back to his ready position
		$(".ryu-still").hide();
		$(".ryu-throwing").hide();
		$(".ryu-cool").hide();
		$(".ryu-ready").show();
	});

	$(document).keydown(function(event){
		if(event.which == 88){
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-throwing").hide();
			$(".ryu-cool").show();
		}
	}).keyup(function(){
		$(".ryu-cool").hide();
		$(".ryu-ready").hide();
		$(".ryu-throwing").hide();
		$(".ryu-still").show();
	});



})

function playHadouken() {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}