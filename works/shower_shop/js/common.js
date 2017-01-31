$(document).ready(function(){

// переходы меджу слайдми
  $('#slider').nivoSlider({
  		effect: 'fold',
  		slices: 15, 
  		pauseOnHover : true,
  		controlNav : false,
  		animSpeed : 500,
  		pauseTime : 4000,
  		prevText :  " ",
  		nextText :  " ",
  }); 

// кнопка cart 
$('.shop-box-wrap').click(function(){
	$('.shopp-cart-content').slideToggle(400);
});

// меню superfich (открытие меню на hover)
$('ul.sf-menu').superfish({
	pathClass:	'current',
	delay: 400,
	cssArrows: false,
});


 //mmenu  
 	$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("sf-menu");
	$("#my-menu").mmenu({
		extensions : [ 'widescreen', 'theme-white', 'pagedim-black', 'effect-menu-zoom' ],
		navbar: {
			title: "MENU",
		}
	});

	var api = $("#my-menu").data("mmenu");
	api.bind("closed", function () {
		$(".menu-btn-wrapper").removeClass("checked");
	});
	$(".menu-btn").click(function() {
		var mmAPI = $("#my-menu").data( "mmenu" );
		mmAPI.open();
		var thiss = $(this).find(".menu-btn-wrapper");
		thiss.toggleClass("checked");
		$(".main-mnu").slideToggle();
		return false;
	});



// одинаковая высота блока product-item
 $(function(){ $('.product-item').equalHeights(); });

// одинаковая высота блока footer-menu
 $(function(){ $('.footer-menu').equalHeights(); });





}); // end ready




// кнопка up
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


// прилоадер
$(window).load(function(){
		$('.loader_inner').fadeOut();
		$('.loader').delay(400).fadeOut('slow');
	});