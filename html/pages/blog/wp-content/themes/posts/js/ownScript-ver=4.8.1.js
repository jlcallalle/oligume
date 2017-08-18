jQuery(document).ready(function(){
/*global jQuery:false */
/*jshint devel:true, laxcomma:true, smarttabs:true */
"use strict";

	jQuery('ul.medpost>li:nth-child(3n)').next().css({'clear': 'both'});
	jQuery('.infoblock>li:nth-child(2n)').next().css({'clear': 'both'});
	
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
		jQuery(".dividers").css('background-attachment','scroll');
		jQuery(".dividers").css('background-position','50% 0px');
	}

	/* services animation */
	if (jQuery('.services')[0]){
		jQuery(window).scroll(function () {
			var y = jQuery(window).scrollTop(),
				x = jQuery('.services').offset().top - 400;
			if (y > x) {
				jQuery('.services li').addClass('fadeInUp').removeClass('fadeOutDown');
			} 
		});
	
		// when refresh
		jQuery(document).ready(function(){
	
		var scrollPos = jQuery(window).scrollTop();
		if (scrollPos > 300) { 
				jQuery('.services li').addClass('fadeInUp').removeClass('fadeOutDown');
				}
	
		});
	}

	/* animatedLeft animation */
	if (jQuery('.animatedCenter')[0]){
		jQuery(window).scroll(function () {
			var y = jQuery(window).scrollTop(),
				x = jQuery('.animatedCenter').offset().top - 600;
			if (y > x) {
				jQuery('.animatedCenter').addClass('fadeInUp');
			} 
		});
		
	}


	if (jQuery('.animatedRight')[0]){	
		jQuery(window).scroll(function () {
			var y = jQuery(window).scrollTop(),
				x = jQuery('.animatedRight').offset().top - 600;
			if (y > x) {
				jQuery('.animatedRight').addClass('fadeInRight');
			} 
		});
	}

	if (jQuery('.animatedLeft')[0]){		
		jQuery(window).scroll(function () {
			var y = jQuery(window).scrollTop(),
				x = jQuery('.animatedLeft').offset().top - 600;
			if (y > x) {
				jQuery('.animatedLeft').addClass('fadeInLeft');
			} 
		});
	}
		
		// when refresh
		jQuery(document).ready(function(){
	
		var scrollPos = jQuery(window).scrollTop();
		if (scrollPos > 300) { 
				jQuery('.animatedLeft').addClass('fadeInLeft');
				jQuery('.animatedRight').addClass('fadeInRight');
				jQuery('.animatedCenter').addClass('fadeInUp');
				if (jQuery.browser.webkit) {
					jQuery('.dividers').css('background-attachment','scroll');
					jQuery('.dividers').css('background-position','50% 0px');
				}
				}
	
		});

	



	/* scroll to top */
	jQuery(".scrollTo_top").hide();
	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 100) {
				jQuery('.scrollTo_top').fadeIn();
			} else {
				jQuery('.scrollTo_top').fadeOut();
			}
		});
		jQuery('.scrollTo_top a').click(function(){
			jQuery('html, body').animate({scrollTop:0}, 500 );
			return false;
		});
	});
	
	
	
	/* default hovers */
	jQuery('.gallery-item img,li.format-image img').hover(function() {
	  jQuery(this).animate({opacity: 0.1}, "normal");
	  }, function() {
	  jQuery(this).animate({opacity: 1}, "normal");
	  });
	  
	  
	  
	  
	/* youtube autoplay */
	jQuery('.video-block iframe').each(function(){
		  var url = jQuery(this).attr("src");
		  var char = "?";
		  if(url.indexOf("?") != -1){
				  var char = "&";
		   }
		
		  jQuery(this).attr("src",url+char+"rel=0&autoplay=1&loop=1&wmode=transparent");
	});
	
	
	
	/* Tooltips */
	jQuery("body").prepend('<div class="tooltip"><p></p></div>');
	var tt = jQuery("div.tooltip");
	
	jQuery("#header ul.social-menu li a").hover(function() {								
		var btn = jQuery(this);
		
		tt.children("p").text(btn.attr("title"));								
					
		var t = Math.floor(tt.outerWidth(true)/2),
			b = Math.floor(btn.outerWidth(true)/2),							
			y = btn.offset().top - -35,
			x = btn.offset().left - (t-b);
					
		tt.css({"top" : y+"px", "left" : x+"px", "display" : "block"});			
		   
	}, function() {		
		tt.hide();			
	});
	
	
	
	/* PrettyPhoto */
	function lightbox() {
		jQuery("a[rel^='prettyPhoto']").prettyPhoto({
			animationSpeed:'slow',
			slideshow:5000,
			theme:'pp_default',
			show_title:false,
			overlay_gallery: false,
			social_tools: false
		});
	}
	
	if(jQuery().prettyPhoto) {
		lightbox();
	}


/* the end */
});