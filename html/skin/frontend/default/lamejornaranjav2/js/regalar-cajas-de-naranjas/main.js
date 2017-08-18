jQuery(document).ready(function($){
	var boton = $('#boton-empresas');
	boton.on('click', function(event){
		event.preventDefault();
		var selectedHref = $(this).attr('href'),
			target= $(selectedHref);
		$('body,html').animate({ 'scrollTop': target.offset().top - 0}, 900);
	})
});