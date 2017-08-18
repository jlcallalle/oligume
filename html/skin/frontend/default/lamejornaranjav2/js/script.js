;(function($) {
    'use strict';

    jQuery(document).ready(function($) {

        // fix-on-top
        var navbar = $('.navbar-fix');
            $(window).on('scroll', function(){
            var scroll = $(window).scrollTop();
            if (scroll > 180) {
                $(navbar).addClass('fixed');
            } else {
                $(navbar).removeClass('fixed');
            }
        });


        //customer dropdown
        /*
        var config = {
             over: function(){                  
                        $('.logged-out .details').animate({opacity:1, height:'toggle'}, 400);                   
                        $('.logged-in .details').animate({opacity:1, height:'toggle'}, 400);                    
                    },
             timeout: 500, // number = milliseconds delay before onMouseOut
             out: function(){
                        $('.logged-out .details').animate({opacity:0, height:'toggle'}, 400);
                        $('.logged-in .details').animate({opacity:0, height:'toggle'}, 400);
                    }
        };
        $("div.logged-out").hoverIntent( config );
        $("div.logged-in").hoverIntent( config );   
        */

        //cart dropdown
        /*
        config = {
             over: function(){
                        $('.cart-top a.summary span.num-items').css({'background-position':'left -17px'
                                                    });
                        $('.cart-top .details').animate({opacity:1, height:'toggle'}, 400);
                    },
             timeout: 500, // number = milliseconds delay before onMouseOut
             out: function(){
                        $('.cart-top a.summary span.num-items').css({'background-position':'left 3px'
                                                    });                                             
                        $('.cart-top .details').animate({opacity:0, height:'toggle'}, 400);
                    }
        };
        $("div.cart-top").hoverIntent( config );
        */

        //Menu
        var config_menu = {
            over: function(){
                var $this = $(this);

                if(!$this.hasClass('search') && !$this.hasClass('home')){
                    $this.addClass('over').find('ul.level0').show();                    
                }
            },
            timeout: 400, // number = milliseconds delay before onMouseOut
            out: function(){ 
                var $elem = $(this).removeClass('over');
                $elem.find('ul.level0').hide();
            }
        };
        $('.navbar-nav li').hoverIntent( config_menu );

        var toolbox = $('.toolbox');
        if(toolbox.length > 0){
            var offset = toolbox.offset(),
                ancho = toolbox.parent().outerWidth(true) + 'px',
                offset_bottom = $('.footer-container-wrapper').outerHeight(true) + $('.footer-copyright-wrapper').outerHeight(true) + 65;
            toolbox.css({ 'width': ancho });
            toolbox.affix({
                offset: { 
                    top: offset.top,
                    bottom: function(){
                       return (this.bottom = offset_bottom);
                    }
                }
            });

            toolbox.find('a').on('click',function(){
                var $this = $(this);
                var clase = $this.prop('class');
                clase = clase.replace('goto-','');
                scrollto('box-' + clase);
            });
        }

        $('.collapse').collapse({ toggle: false });

        function scrollto(clase){
            $('html, body').animate({
                scrollTop: $('.' + clase).offset().top
            }, 300);
        }

        /*
        $('#shopping-cart-table').find('.input-text.qty').each(function(){
            var input_cant = $(this);
            input_cant.wrap('<div class="qty-wrapper" />');
            var cantidad = input_cant.parent();             
            var menos = $('<div class="qty-menos noSelect"></div>').prependTo(cantidad);
            var mas = $('<div class="qty-mas noSelect"></div>').appendTo(cantidad);
            var update = $('.btn-update').clone().removeClass('btn-update').addClass('link').appendTo(cantidad).hide();
            menos.click(function(){ 
                var value = input_cant.val();
                if(value>1) value--;
                input_cant.val(value);
            });
            mas.click(function(){ 
                var value = input_cant.val();
                value++;
                input_cant.val(value);          
            });
            cantidad.hover(function(){ update.show(); },function(){ update.hide(); });      
        });
        */

        $('.abrir-popup-link').magnificPopup({           
               type:'inline',
        });  

    });

})(jQuery);
