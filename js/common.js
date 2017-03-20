$(document).ready(function() {

		$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


		$(window).scroll(function() {
			if($(this).scrollTop() >= 73) {
			$('.navigation').addClass('stickytop');
			}
			else{
			$('.navigation').removeClass('stickytop');
			}
		});

	

		$(".toggle_mnu").click(function() {
			$(this).toggleClass("on");
			$(".main-mnu").slideToggle();
			$(".sandwich").toggleClass("active");
		});


	

	$(".btn .poster-btn").mPageScroll2id();
	$(".navigation nav ul a").mPageScroll2id();
	$(".hidden-mnu ul a").mPageScroll2id();
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});