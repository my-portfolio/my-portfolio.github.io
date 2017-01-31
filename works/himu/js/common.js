$(document).ready(function() {

	// header carousel
	$(".carousel-wrapper").owlCarousel({
	 	loop: true,
	 	items: 1,
	 	nav: true,
	 	navText: "",
	 	autoPlay : true,
		stopOnHover : true,
   	fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600,
		mouseDrag : false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
	 });

	

	// section_tabs
	$('.tabs li').click(function(){
		if ($(this).hasClass('selected')===false) {
			$('.tabs li').removeClass('selected');
			$(this).addClass('selected');
		}
		var selectionId = $(this).attr('id');
		$('.content').fadeOut('fast', function(){
			$('div .page').css('display','none');
			$('.page#'+selectionId).css('display','block');
			$('.content').fadeIn('fast');
		});
	});


	//skillbar
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});


	// all Parallax Section
	$(window).load(function(){'use strict',
		$("#services").parallax("50%", 0.3);
		$("#clients").parallax("50%", 0.3);
	});

	// одинаковая высота блока 
	$(function(){ $('.servic_item').equalHeights(); });
	$(function(){ $('.carousel_team_item').equalHeights(); });
	$(function(){ $('.blog_item').equalHeights(); });

	
	// btn_mnu (hamburger)
		$('.menu-trigger').on('click', function () {
			return $(this).toggleClass('active');
		});

		$('.menu-trigger').click(function(){
			$('.my_mnu').slideToggle(600);
		});
	
	// при клике на ссылку меню сворачиваеться
	$(".my_mnu ul a").click(function() {
		$(".my_mnu").hide(400);	
		$(".menu-trigger").toggleClass("active");
	});


//carousel team
	$('.carousel_team').owlCarousel({
		loop:true,
		margin:30,
		navContainer: ".owl-navi",
		nav: true,
		navText: ["&nbsp;","&nbsp;"],
		items: 4,
		responsive:{
			0:{
				items:1,
				center: true
			},
			480:{
				items:2
			},
			768:{
				items:3
			},
			1000:{
				items:4,
			}
		}
	});

//carousel team
	$('.carousel_clients').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
	});


	// Плитка 
	$("#portfolio_grid").mixItUp();

//портфолио увеличение картинок
	$(".fancybox").fancybox();


// скрипт для  jq bootstrap validator
	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation(); 
	

// waypoint навигации
	var navLi = $('.my_mnu li a');
	$('.tracked').waypoint(function(){
		var hash = $(this).attr('id');
		navLi.removeClass('active');

		$.each(navLi, function(){
			if ($(this).attr('href').slice(1) == hash){
				$(this).addClass('active');
			}

		});
	},{ 
		offset: '-1%'
	});

//scroll to Id
	$('.my_mnu li a').mPageScroll2id();



}); //end ready


// Прилоадер 
	$(window).load(function(){
		$('.loader_inner').fadeOut();
		$('.loader').delay(400).fadeOut('slow');
});