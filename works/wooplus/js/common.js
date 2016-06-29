$(function() {

	// slider  bb-bookblock 
	$( '.bb-bookblock' ).bookblock({
		circular	: true,
		nextEl : '#bb-nav-next',
		prevEl : '#bb-nav-prev'
	});

	// fixed top menu
	$(window).load(function(){
		$(".header-bot").sticky({ topSpacing: 0 });
	});

	// tab block
	var tabWrapper = $('#tab-block'),
		tabMnu = tabWrapper.find('.tab-mnu  li'),
		tabContent = tabWrapper.find('.tab-cont > .tab-pane');

	tabContent.not(':first-child').hide();

	tabMnu.each(function(i){
		$(this).attr('data-tab','tab'+i);
	});
	tabContent.each(function(i){
		$(this).attr('data-tab','tab'+i);
	});

	tabMnu.click(function(){
		var tabData = $(this).data('tab');
		tabWrapper.find(tabContent).hide();
		tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').show(); 
	});

	$('.tab-mnu > li').click(function(){
		var before = $('.tab-mnu li.active');
		before.removeClass('active');
		$(this).addClass('active');
	});

	// top-slider
	var owl = $(".slider-container");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "top-slide-item",
		nav: true,
		navText: "",
		animateOut: 'fadeOut',
		animateIn: 'fadeIn'
	});

	//sf-menu
	$(".sf-menu").superfish({
		cssArrows: false,
		hoverClass: 'sfHover',
		animation: {height:'show'},
		delay: 100,	
		speedOut: 'fast',
		disableHI: true,
		speed: 'normal'
	});

	//mobile right sf-menu
	$(".header-bot-right-nav .sf-menu").after("<div id='my-menu'>");
	$(".header-bot-right-nav .sf-menu").clone().appendTo("#my-menu");
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

	$(".toggle-mnu").click(function() {
		var mmAPI = $("#my-menu").data( "mmenu" );
		mmAPI.open();
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	// trigger button
	$('.left-navigation .menu-trigger').click(function(){
		$(".left-navigation ul.sf-vertical").slideToggle('slow');
		return false;
	});

	// equalHeights
	$('.summer-sale .product-item').equalHeights();
	$('.featured-latest-products .product-item').equalHeights();

	
	// subscribe
	if (typeof newsletter_check !== "function") {
		window.newsletter_check = function (f) {
			 var re = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-]{1,})+\.)+([a-zA-Z0-9]{2,})+$/;
			 if (!re.test(f.elements["ne"].value)) {
				  alert("The email is not correct");
				  return false;
			 }
			 for (var i=1; i<20; i++) {
			 if (f.elements["np" + i] && f.elements["np" + i].required && f.elements["np" + i].value == "") {
				  alert("");
				  return false;
			 }
			 }
			 if (f.elements["ny"] && !f.elements["ny"].checked) {
				  alert("You must accept the privacy statement");
				  return false;
			 }
			 return true;
		}
	}
	//]]&gt;

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
