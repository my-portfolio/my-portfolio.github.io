$(function() {

	$(".top_text h1, .top_text span").animated("fadeInDown");
	$(".top_text a, .top_text p").animated("fadeInUp");
	$(".get_item").animated("zoomIn");
	$(".iphone_wrap").animated("fadeInLeft");
	$(".fudi_app").animated("fadeInRight");
	$(".statistic li").animated("slideInDown");
	$(".cuisines h3").animated("fadeInDown");

	$(".cuisines_item a").equalHeights();

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main_mnu").slideToggle();
		return false;
	});

	$(".slider").owlCarousel({
		items : 1,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});

	function wResize() {
		$(".main_head").css('height', $(window).height());
		$(".main_head_content").css('min-height', $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize();
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
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

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
