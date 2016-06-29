$(function() {

	$(".main-head .fadeInDown").animated("fadeInDown");
	$(".main-head .fadeInUp").animated("fadeInUp");
	$(".sale-item").animated("zoomIn");
	$(".subscribe p").animated("fadeInDown");
	$(".subscribe .form-group, .subscribe .button").animated("fadeInDown");

	/* carousel .top-slider
	=================================================*/
	var owl = $(".top-slider");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "top-slide",
		navText: ""
	});

	/* carousel .trending-slider
	=================================================*/
	var owl = $(".trending-slider");
	owl.owlCarousel({
		loop : true,
		items : 1,
		itemClass : "trending-slide",
		navText : "",
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 700,
		autoplaySpeed : 700,
		navSpeed : 700,
		dotsSpeed : 700,
		dragEndSpeed : 700
	});

	/* carousel .blog-slider
	=================================================*/ 
	var owl = $(".blog-slider");
	owl.owlCarousel({
		loop : true,
		items : 1,
		itemClass : "blog-slide	",
		nav : true,
		navText : "",
		fluidSpeed : 700,
		navSpeed : 700,
		dotsSpeed : 700,
		dragEndSpeed : 700,
		animateOut: 'fadeOut',
		animateIn: 'fadeInLeft'
	});

	/* latest-product-items animation
	=================================================*/ 
	$(".latest-product-items").waypoint(function() {

		$(".latest-product-items .latest-product-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("latest-product-items-off").addClass("latest-product-items-on");
			}, 200*index);
		});

	}, {
		offset : "50%"
	});

	$(".sale-item").equalHeights();

	/* Mobile Menu
	=================================================*/  
	var toggleButton = $('.menu-toggle'),
		 nav = $('.main-navigation');

	toggleButton.on('click', function(event){
		event.preventDefault();

		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
	});

	if (toggleButton.is(':visible')) nav.addClass('mobile');

	$('.top-menu li a').on("click", function() {   

		if (nav.hasClass('mobile')) {   		
			toggleButton.toggleClass('is-clicked'); 
			nav.fadeOut();   		
		} 
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

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

$(window).resize(function() {
	if (toggleButton.is(':visible')) nav.addClass('mobile');
	else nav.removeClass('mobile');
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});