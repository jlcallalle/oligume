jQuery(document).ready(function($){
	
	//------------------------------------------------//
	// Vamos a fijar el toolbox cuando hacemos scroll //
	//------------------------------------------------//

		if ($('.tool-box').length>0){
			
			// 	Existe el toolbox, lo convertimos en variable
				var toolbox = $('.tool-box');

			$(window).load(function() {
				//  Cosas que necesitamos para posicionar el scroll:
				//  altura de la caja y altura de la seccion de detalle.
				//  Nos guardamos la altura de las descripciones para luego.
					var toolboxHeight   = $(toolbox).height(),
					    detailsHeight   = $('.product-details').height(),
					    descripcionHeight = $('.box-description').height();
				
				//  El affix empieza cuando el toolbox choca con el top de la página.
					var affixTop = $(toolbox).offset().top;
				
				//  El affix acaba cuando el toolbox choca con el final de la ficha,
				//  es decir, hasta el final de los detalles. Le restamos la altura de la caja
				//  para que el tope esté en la parte de abajo.
					var affixBottom = affixTop + detailsHeight - toolboxHeight;

				//  Fix para que la columna tenga la altura necesaria.
						$('.fix-wrap').height(detailsHeight);
			

				// ¡Comienza el juego!
				$(window).on('scroll', function(){
					
					//  ¿Cuanto llevamos scrolleado?
						var scroll = $(window).scrollTop();
						
						//	Empezamos desde abajo: si el scroll ha sobrepasado el final de la ficha...
							if (scroll > affixBottom) {
								$(toolbox).addClass('is-fixed-bottom');
								$(toolbox).removeClass('is-fixed');
						//	... si solo ha sobrepasado la posicion del toolbox...
							} else if (scroll > affixTop) {
								$(toolbox).addClass('is-fixed');
								$(toolbox).removeClass('is-fixed-bottom');
						//  ... nada. El toolbox, más feliz que una perdiz.
							} else {
								$(toolbox).removeClass('is-fixed');
							}

					//  ¡No te olvides de activar los titulos según vamos scrolleando!
						if (scroll > affixTop + descripcionHeight) {
							$('.cd-faq-categories').find('a').removeClass('selected');
							$('.cd-faq-categories').find('a[href^="#opiniones"').addClass('selected');
						} else if (scroll > affixTop) {
							$('.cd-faq-categories').find('a').removeClass('selected');
							$('.cd-faq-categories').find('a[href^="#descripcion"').addClass('selected');
						} else {
							$('.cd-faq-categories').find('a').removeClass('selected');
							$('.cd-faq-categories').find('a[href^="#producto"').addClass('selected');
						}
				});
			});
		}


		// Scroll suave cuando clicamos en un apartado del toolbox.
		$('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();
		    $(".cd-faq-categories").find("a").removeClass("selected");
		    $(this).addClass("selected");

		    var target = this.hash,
		    $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top - 53
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		    });
		});	
});