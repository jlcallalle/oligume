jQuery(document).ready(function(){
/*global jQuery:false */
/*jshint devel:true, laxcomma:true, smarttabs:true */
"use strict";

	// trigger + show menu on fire
	  
        jQuery('a#triggernav').click(function(){ 
                jQuery('#top-navigation').toggleClass('shownav'); 
                jQuery('#navigation').toggleClass('shownav'); 
                jQuery('#header .searchform').toggleClass('hidenav'); 
                jQuery(this).toggleClass('active'); 
                return false; 
        }); 
});