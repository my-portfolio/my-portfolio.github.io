$(function() {

	/* Mobile Menu
	=================================================*/  
	var toggleButton = $('.menu-toggle'),
		 nav = $('.top-menu');

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

	$('.top-line-menu li a').on("click", function() {   

		if (nav.hasClass('mobile')) {   		
			toggleButton.toggleClass('is-clicked'); 
			nav.fadeOut();   		
		} 
	});

	$("ul.hover-shop li").equalHeights();
	$(".about-us, .shopping-with-us").equalHeights();

	var owl_1 = $(".new-product-slider");
	owl_1.owlCarousel({
		loop: true,
		items: 3,
		itemClass: "new-product-slide-wrap",
		nav: true,
		navText: "",
		responsive:{
			0:{
				items:1
			},
			700:{
				items:3
			}
		}
	});
	$(".new-next").click(function(){
		owl_1.trigger('next.owl.carousel');
	})
	$(".new-prev").click(function(){
		owl_1.trigger("prev.owl.carousel");
	});

	var featured_owl = $(".featured-product-slider");
	featured_owl.owlCarousel({
		loop: true,
		items: 4,
		itemClass: "featured-product-slide",
		nav: true,
		navText: "",
		responsive:{
			0:{
				items:1
			},
			400:{
				items:2
			},
			750:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});
	$(".featured-next").click(function(){
		featured_owl.trigger('next.owl.carousel');
	})
	$(".featured-prev").click(function(){
		featured_owl.trigger("prev.owl.carousel");
	});


	$(".top-menu-navigation .sf-menu").superfish({
		cssArrows: false,
		hoverClass: 'no-class',
		delay: 200
	});

	$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("sf-menu");
	$("#my-menu").mmenu({
		extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Menu"
		}
	});

	var api = $("#my-menu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});

	$(".mobile-mnu").click(function() {
		var mmAPI = $("#my-menu").data( "mmenu" );
		mmAPI.open();
		var thiss = $(this).find(".toggle-mnu");
		thiss.toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
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


