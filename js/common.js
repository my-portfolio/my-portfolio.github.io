$(function() {

// animation
	$(".top-text h1").animated("fadeInDown");
	$(".top-text p").animated("fadeInUp");
// heightDetect
	function heightDetect() {
		$(".main-head").css('height', $(window).height());
		$(".top-wrapper").css('min-height', $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
// toggle-menu
	$(".toggle-menu").click(function() {
	$(".sandwich").toggleClass("active");
	});

	$(".top-menu ul a").click(function() {
		$(".top-menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top-text").css("opacity", "1");
	});

	$(".toggle-menu").click(function() {
		if ($(".top-menu").is(":visible")) {
			$(".top-text").css("opacity", "1");
			$(".top-menu").fadeOut(600);
			$(".top-menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top-text").css("opacity", ".1");
			$(".top-menu").fadeIn(600);
			$(".top-menu li a").addClass("fadeInUp animated");
		};
	});
// Scroll2id
	$(".top-menu ul a").mPageScroll2id();
	
// scrollTop
	$(".arrow-bottom").click(function() {
		$("html, body").animate({ scrollTop: $(".main-head").height()+40 }, "slow");
		return false;
	});
// paralax
	$('.main-head').enllax();
	$('.about').enllax();
	$('.portfolio').enllax();
	$('.contacts').enllax();
	$('.blockquote').enllax();
// jqBootstrapValidation
	$("input, select, textarea").jqBootstrapValidation();

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown");
	$(".top_text p").animated("fadeInUp");
});

// up-to
$(window).scroll(function(){
	if ($(this).scrollTop() >= 200){ 
		$('.btn-up').fadeIn("slow")
	}
	else{
		$('.btn-up').fadeOut("fast")
	}
});

	$(".btn-up").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
});