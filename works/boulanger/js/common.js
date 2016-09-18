$(function() {

	$('.overlay-map').click(function() {
		$(this).remove();
	});

	// Scroll2id
	$(".site-navigator a").mPageScroll2id();

	$('.reviews-slider').owlCarousel({
		loop:true,
    	items: 1,
    	autoplay: true,
    	autoplayHoverPause: true,
    	autoplaySpeed: 800,
    	dotsSpeed: 800,
    	smartSpeed: 900
	});

	$('.advantages-item h5').equalHeights();
	$('.advantages-item img').equalHeights();
	$(".special-menu-content").equalHeights();

	//$('.our-special-menu').enllax();

	$.stellar({
		responsive: true,
		horizontalScrolling: false
	});

	 $('.popup-content').magnificPopup({
	 	type:'inline',
	 	midClick: true
	 });

	//datetimepicker
	$.datetimepicker.setLocale('en');

	$('#datepicker').datetimepicker({
		timepicker:false,
		format: 'M d, Y',
		startDate: new Date(),
		defaultDate: new Date(),
		minDate: 0,
		yearEnd: 2030,
		yearStart: 2016,
		value: new Date()
	});

	$('#timepicker').datetimepicker({
		datepicker:false,
		formatTime:'g:i A',
		format: 'h:i A',
		defaultTime:'11:00 A',
		allowTimes:[
			'9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 P', '12:30 P', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
		]
	});


	// // Hide Header on on scroll down
	// var didScroll;
	// var lastScrollTop = 0;
	// var delta = 0;
	// var navbarHeight = $('.main-head').outerHeight();

	// $(window).scroll(function(event){
	// 	didScroll = true;
	// });

	// setInterval(function() {
	// 	if (didScroll) {
	// 		hasScrolled();
	// 		didScroll = false;
	// 	}
	// }, 0);

	// function hasScrolled() {
	// 	var st = $(this).scrollTop();

	// 	// Make sure they scroll more than delta
	// 	if(Math.abs(lastScrollTop - st) <= delta)
	// 		return;

	// 	// If they scrolled down and are past the navbar, add class .nav-up.
	// 	// This is necessary so you never see what is "behind" the navbar.
	// 	if (st > lastScrollTop && st > navbarHeight){
	// 		// Scroll Down
	// 		$('.main-head').removeClass('nav-down').addClass('nav-up');
	// 	} else {
	// 		// Scroll Up
	// 		if(st + $(window).height() < $(document).height()) {
	// 			$('.main-head').removeClass('nav-up').addClass('nav-down');
	// 		}
	// 	}

	// 	lastScrollTop = st;
	// }




	// var scroll = $(document).scrollTop();
	// var headerHeight = $('.page-header').outerHeight();

	// $(window).scroll(function() {
	// 	var scrolled = $(document).scrollTop();
	// 	if (scrolled > headerHeight){
	// 		$('.page-header').addClass('off-canvas');
	// 	} else {
	// 		$('.page-header').removeClass('off-canvas');
	// 	}

	// 	if (scrolled > scroll){
	// 		$('.page-header').removeClass('fixed');
	// 	} else {
	// 		$('.page-header').addClass('fixed');
	// 	}
	// 	scroll = $(document).scrollTop(); 
	// });




	;( function ( document, window, index )
	{
		'use strict';

		var elSelector	= '.main-head',
			element		= document.querySelector( elSelector );

		if( !element ) return true;

		var elHeight		= 0,
			elTop				= 0,
			dHeight			= 0,
			wHeight			= 0,
			wScrollCurrent	= 0,
			wScrollBefore	= 0,
			wScrollDiff		= 0;

		window.addEventListener( 'scroll', function()
		{
			elHeight			= element.offsetHeight;
			dHeight			= document.body.offsetHeight;
			wHeight			= window.innerHeight;
			wScrollCurrent	= window.pageYOffset;
			wScrollDiff		= wScrollBefore - wScrollCurrent;
			elTop				= parseInt( window.getComputedStyle( element ).getPropertyValue( 'top' ) ) + wScrollDiff;

			if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
				element.style.top = 'px';

			else if( wScrollDiff > 0 ) // scrolled up; element slides in
				element.style.top = ( elTop > 0 ? 0 : elTop ) + 'px';


			else if( wScrollDiff < 0 ) // scrolled down
			{
				//if( wScrollCurrent + wHeight >= dHeight - elHeight )  // scrolled to the very bottom; element slides in
				// 	element.style.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';

				//else // scrolled down; element slides out
					element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
					
			}

			wScrollBefore = wScrollCurrent;
		});

	}( document, window, 0 ));



	/* Mobile Menu
	====================================================== */  
	var toggleButton = $('.menu-toggle'),
		nav = $('.site-navigator');

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

	$('.site-navigator li a').on("click", function() {   

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

$(window).scroll(function(){
	if ($(this).scrollTop() >= 110){ 
		$('header').addClass('header-scroll')
	}
	else{
		$('header').removeClass('header-scroll')
	}
});
$(window).scroll(function(){
	if ($(this).scrollTop() > 0){ 
		$('.mobile').fadeOut()
		$('.menu-toggle').removeClass('is-clicked')
	}
	else{
	}
});

