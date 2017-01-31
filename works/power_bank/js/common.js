$(document).ready(function() {

	// Прилоадер 
	$(window).load(function(){
		$('.loader_inner').fadeOut();
		$('.loader').delay(400).fadeOut('slow');
	});



	// Parallax Section
	$(window).load(function(){'use strict',
		$("#parallax").parallax("50%", 0.3);
	});

	// одинаковая высота блока 
	$(function(){ $('.protection_item').equalHeights(); });


	// popup для формы
	$(".popup_form").magnificPopup();


	// carousel_slides
	$(".img_items").owlCarousel({
		items: 1,
      loop: true,
      autoplay: true,
      dotsContainer: ".carousel_img_wrapper .owl-dots",
      dotsEach: true,
      animateOut: 'fadeOut'
	});

	// carousel_clients
	$(".carousel_clients_items").owlCarousel({
		items: 1,
      loop: true,
      autoplay: true,
      nav: true,
      navText:"",
      mouseDrag: false,
      autoplayHoverPause: true,
      animateOut: 'fadeOut'
	});



	// btn_mnu (hamburger)
		$('.menu-trigger').on('click', function () {
			return $(this).toggleClass('active');
		});

		$('.menu-trigger').click(function(){
			$('.head_nav').slideToggle(600);
		});
	
	// при клике на ссылку меню сворачиваеться
	$(".head_nav ul a").click(function() {
		$(".head_nav").fadeOut(600);
		$(".menu-trigger").toggleClass("active");
	});


	//button Up
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 600){ 
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


	// скрипт для  jq bootstrap validator
	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation(); 


	//scroll to Id
	$('.head_nav li a').mPageScroll2id();
	$('.btn_wrap a').mPageScroll2id();



	// animated
	$(".animation_3").animated("fadeInUp"); 
	$(".animation_1").animated("fadeInLeft");
	$(".animation_2").animated("fadeInRight");
	$(".animation_4").animated("pulse"); 
	$(".animation_5").animated("zoomIn"); 
	$(".payment_wrap").animated("zoomInDown"); 
	//bounceOut
	 

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
		
	};
	
}); //end ready




