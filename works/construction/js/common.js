$(function() {

	function initSize() {
		$(".box_ul .panel-heading").each(function() {
		var ph = $(this).height() + 3 ;
		var pdt =$(this).find(".dropdown-toggle");
		pdt.height(ph);
	});

	$(".till_item .tc").each(function() {
		var parh = $(this).parent().height();
		$(this).height(parh);
		var parw = $(this).parent().width();
		$(this).width(parw);
	});
	};

	initSize();

	$(window).resize(function() {
		initSize();
	});

//Высота блоков	
	function setEqualHeight(columns)
	{
		var tallestcolumn = 0;
		columns.each(
			function()
			{
				currentHeight = $(this).height();
				if(currentHeight > tallestcolumn)
				{
					tallestcolumn = currentHeight;
				}
			}
			);
		columns.height(tallestcolumn);
	}
	$(document).ready(function() {
		setEqualHeight($(".widget_news > .row > .news_item"));
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
