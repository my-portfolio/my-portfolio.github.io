$(function() {

	$(".top-line").animated("fadeInDown");
	$("h1.fadeInDown, .h1-descr.fadeInDown").animated("fadeInDown");
	$("a.fadeInUp").animated("fadeInUp");
	$(".services .section-head").animated("fadeInUp");
	$(".our-projects .section-head").animated("fadeInUp");
	$(".reviews .section-head").animated("fadeInUp");
	$(".main-blog .section-head").animated("fadeInUp");
	$(".service-item").animated("zoomIn");
	$(".main-blog-item.fadeInLeft").animated("fadeInLeftBig");
	$(".main-blog-item.fadeInRight").animated("fadeInRightBig");
	$(".main-footer .logo, .social-wrap, .copyright").animated("slideInLeft");

	$(".main-blog-item h4").equalHeights();
	$(".main-blog-item p").equalHeights();

	$("#projects-grid").mixItUp();

	$(".filter-div li").click(function() {
		$(".filter-div li").removeClass("active");
		$(this).addClass("active");
	});

	
	$(".popup-content").magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	var revowl = $(".reviews-slider");
	revowl.owlCarousel({
		loop : true,
		items : 1,
		itemClass : "reviews-slide",
		navText : "",
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600,
		dotsContainer : ".reviews-slider-dots-container .owl-dots"
	});

	var owl = $(".top-slider");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "top-slide",
		nav: true,
		navText: "",
		animateOut: 'fadeOut',
		animateIn: 'fadeIn'
	});
	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	})
	$(".prev").click(function(){
		owl.trigger("prev.owl.carousel");
	});

	$(".top-menu li").click(function() {
		$(".top-menu li").removeClass("active");
		$(this).addClass("active");
	});


		/* Mobile Menu
	====================================================== */  
	var toggleButton = $('.menu-toggle'),
		 nav = $('.main-navigation');

	toggleButton.on('click', function(event){
		event.preventDefault();

		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
	});

	if (toggleButton.is(':visible')) nav.addClass('mobile');

	$(window).resize(function() {
		if (toggleButton.is(':visible')) nav.addClass('mobile');
		else nav.removeClass('mobile');
	});

	$('.top-menu li a').on("click", function() {   

		if (nav.hasClass('mobile')) {   		
			toggleButton.toggleClass('is-clicked'); 
			nav.fadeOut();   		
		} 
	});

	$(".project-item").each(function(i) {
		$(this).find("a").attr("href", "#work-" + i);
		$(this).find(".project-descr").attr("id", "work-" + i);
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
