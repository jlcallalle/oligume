;jQuery(function($) {
    
//TODO: Rellena array id_products con los identificadores de los simples ()
    var $mySlider = $( "#slider-range" ),        
        $tabs = $('.tabs').find('li'),
        $kilos = $('.kilos').find('li'),
        $qty = $('.product-options').find('input[type="text"]'), //Inputs de cantidad
        $conf_options = $('.conf-options'), //Opciones de configuración
        $slider_steps = $('.slider-steps'), //Barra de pasos del slider
        $slider_range = $('#slider-range'),
        $seleccion = $('.seleccion'),
        $seleccion_contenido = $('.seleccion .contenido'),
        initilized = false, //Texto de artículos seleccionados                
        configurador = true; //Indica si estamos en modo configurador*/        
        /*current_handlers = 4,
        current_kilos = 10,
        initilized = false,
        amount = [3,5,7,9],
        id_products = [52,55,51,54,53], //1. Naranjas mesa, 2. Naranjas zumo, 3. Limones, 4. Mandarinas, 5. Pomelos        
        products = ['naranjas-mesa','naranjas-zumo','limones','mandarinas','pomelos'], //Para crear los checkbox del configurador y para ordenar los inputs
        product_index = [0,1,2,3,4], //Posiciones iniciales de los inputs, se usa como indice a la hora de rellenar los inputs
        configurador = true; //Indica si estamos en modo configurador*/

    var tabla_handler_kilos = { //Posiciones iniciales de handlers según número de handlers y kilos
        'h1' : {
            'k5' : '3',
            'k10' : '5',
            'k15' : '7',
        },
        'h2' : {
            'k5' : '2,4',
            'k10' : '6,8',
            'k15' : '4,8',
        },
        'h3' : {
            'k5' : '1,2,4',
            'k10' : '3,5,7',
            'k15' : '10,12,14',
        },
        'h4' : {
            'k5' : '1,2,3,4',
            'k10' : '3,5,7,9',
            'k15' : '4,6,8,10',
        }
    };

    var amount = tabla_handler_kilos['h'+current_handlers]['k'+current_kilos].split(',');

    //Funcionalidad tabs
    /*$tabs.each(function(){

        $(this).on('click',function(){
            $tab = $(this);
            current_handlers = $tab.data('handlers');            
                        
            var values = tabla_handler_kilos['h'+current_handlers]['k'+current_kilos].split(',');

            product_index.length = 0;
            configurador = false;

            var clases = $tab.attr('class');            
            if(clases == 'configurador')
            {
                product_index = [0,1,2,3,4];
                configurador = true;
                var $opciones = $conf_options.find('.options').eq(0);
                if($opciones.length > 0){
                    $opciones.find('input').prop('checked',true);
                }
            }            
            else{

                clases = clases.replace(' active','');
                clases = clases.split('-');
                for (var i = 0, l = clases.length; i < l; i++) {
                    if(clases[i] == 'naranjas-mesa') product_index.push(0);
                    if(clases[i] == 'naranjas-zumo') product_index.push(1);
                    if(clases[i] == 'limones') product_index.push(2);
                    if(clases[i] == 'mandarinas') product_index.push(3);
                    if(clases[i] == 'pomelos') product_index.push(4);
                };

                show_product_selector(false);
            }         

            if(init(0, current_kilos, values))
            {
                if(configurador){
                    show_product_selector(true);
                }    
            }            
        });

    }); */

    /**
     * Monta el selector de productos (checkbox) en función de la variable products. Habrá que llamar a esta función cada vez que hagamos un cambio de kilos
     * Solo se montan los checkbox no hay ninguno ya montado. Para rehacerlos habrá que eliminarlos previamente antes de llamar a esta función.
     * @param  boolean show deprecated: para mostrar o no el selector     
     */
    function show_product_selector(show){
        if(show){
            var $opciones = $conf_options.find('.options').eq(0);

            if($opciones.length == 0){
                $opciones = $('<div class="options"></div>').appendTo($conf_options);
                for(var i = 0, l = products.length; i < l; i++){
                    $opcion = $('<div class="option-wrapper">').appendTo($opciones)                    
                    if(i < current_max_comb)
                        $check = $('<input type="checkbox" id="opt-'+ products[i] +'" checked="checked" value="'+ products[i] +'">').appendTo($opcion);
                    else
                        $check = $('<input type="checkbox" id="opt-'+ products[i] +'" value="'+ products[i] +'">').appendTo($opcion);

                    $label = $('<label for="opt-'+ products[i] +'">'+ labels[i] +'</label>').appendTo($opcion);
                    $check.on('click',function(e){
                        //Funcionalidad cada vez que se marca o desmarca un checkbox
                        $marcados = $opciones.find('input:checked');
                        if($marcados.length > current_max_comb)
                        {
                            var msg = 'Puedes combinar ' + current_max_comb + ' productos como máximo';
                            alert(msg);
                            e.preventDefault();
                            return false;
                        }

                        if($marcados.length <= 1)
                        {
                            //alert('Debes seleccionar dos productos por lo menos');
                            init_amounts();
                            $seleccion.find('li').hide();
                            $mySlider.slider("disable");                            
                        }
                        
                        if($marcados.length > 1){
                            $mySlider.slider("enable");
                            current_comb = $marcados.length;
                            //Inicializo el indice product_index de productos según los checkbox marcados                            
                            current_handlers = $marcados.length - 1; //Un handler menos que productos siempre
                            product_index.length = 0;
                            $seleccion.find('li').hide();
                            $marcados.each(function(){                                                            
                                var id = $(this).attr('id');
                                
                                $seleccion.find('.' + id.replace('opt-','')).show();

                                /*if(id == 'opt-naranjas-mesa') product_index.push(0);
                                if(id == 'opt-naranjas-zumo') product_index.push(1);
                                if(id == 'opt-limones') product_index.push(2);
                                if(id == 'opt-mandarinas') product_index.push(3);
                                if(id == 'opt-pomelos') product_index.push(4);
                                */
                                /*if(id == 'opt-naranjas-mesa')
                                    product_index.push(products.indexOf('naranjas-mesa'));*/

                                products = products_tramo[current_kilos + '-' + current_comb].split(',');

                                switch (id) {
                                    case "opt-naranjas-mesa":
                                        product_index.push(products.indexOf('naranjas-mesa'));
                                        break;
                                    case "opt-naranjas-zumo":
                                        product_index.push(products.indexOf('naranjas-zumo'));
                                        break;
                                    case "opt-limones":
                                        product_index.push(products.indexOf('limones'));
                                        break;                                        
                                    case "opt-mandarinas":
                                        product_index.push(products.indexOf('mandarinas'));
                                        break;
                                    case "opt-pomelos":
                                        product_index.push(products.indexOf('pomelos'));
                                        break;
                                    case "opt-sanguinas":
                                        product_index.push(products.indexOf('sanguinas'));
                                        break;                                        
                                }                                
                            });                            

                            var values = tabla_handler_kilos['h'+current_handlers]['k'+current_kilos].split(',');            
                            init(0, current_kilos, values); 
                        }
                        

                    });
                }

                //Productos fuera de temporada
                for(var i = 0, l = fuera_temporada.length; i < l; i++){                                    
                    $opcion = $('<div class="option-wrapper">').appendTo($opciones)                                        
                    $label = $('<label class="fuera-temporada">'+ fuera_temporada[i] +'</label>').appendTo($opcion);
                };
            }
            else{
                $conf_options.show();
            }
        }
        else{
            $conf_options.hide();
        }
    }

    /**
     * Funcionalidad para cambiar los kilos
     * @return {[type]} [description]
     */
    $kilos.each(function(){
        $(this).on('click',function(){
            $kilo = $(this);
            current_kilos = $kilo.data('kilos');                    
            
            //Número de handlers segun combinacion máxima
            current_handlers = max_comb[current_kilos]-1;                

            //Cuantos productos se están combinando (ponemos el máximo permitido)
            current_comb = max_comb[current_kilos];            

            //Combinación máxima segun kilos
            current_max_comb = max_comb[current_kilos];
                        
            //Ponemos el peso de la caja encima del precio
            $peso_caja.find('.num').html(current_kilos);
            
            //Inicializamos
            $conf_options.empty();            
            show_product_selector(true);            
            
            var $opciones = $conf_options.find('.options').eq(0);
            var $marcados = $opciones.find('input:checked');
            $seleccion.find('li').hide();
            product_index.length = 0;
            $marcados.each(function(){                                                            
                var id = $(this).attr('id');
                $seleccion.find('.' + id.replace('opt-','')).show();

                products = products_tramo[current_kilos + '-' + current_comb].split(',');

                switch (id) {
                    case "opt-naranjas-mesa":
                        product_index.push(products.indexOf('naranjas-mesa'));
                        break;
                    case "opt-naranjas-zumo":
                        product_index.push(products.indexOf('naranjas-zumo'));
                        break;
                    case "opt-limones":
                        product_index.push(products.indexOf('limones'));
                        break;                                        
                    case "opt-mandarinas":
                        product_index.push(products.indexOf('mandarinas'));
                        break;
                    case "opt-pomelos":
                        product_index.push(products.indexOf('pomelos'));
                        break;
                    case "opt-sanguinas":
                        product_index.push(products.indexOf('sanguinas'));
                        break;                        
                }

            });
            
            //Inicializamos slider
            var values = tabla_handler_kilos['h'+current_handlers]['k'+current_kilos].split(',');
            init(0, current_kilos, values);

        });
    });

    /**
     * Inicializa el slider y los valores de los inputs según parámetros
     * @param  {int} min      Mínimo, siempre debería ser 0 aunque nunca alcanzable
     * @param  {max} max      Valor máximo del slider
     * @param  {array} values Indices donde se posicionarán por defecto los handlers
     * @return {boolean}      Si se ha confirmado la inicialización o no
     */
    function init(min, max, values){
        var confirmed = true;
        /*if(initilized){
            confirmed = confirm("¿Estás seguro de que quieres reiniciar?");            
        }*/
        if(confirmed == true){
            $mySlider.slider("destroy");
            $mySlider.slider({
                //range: true,//don't set range
                min: min,
                max: max,
                values: values,
                slide: function( evt, ui ) {
                    stop_animation_tips();
                    for(var i = 0, l = ui.values.length; i < l; i++){                    
                        //Control de posición
                        if(ui.values[i] === min)
                            return false;

                        if(ui.values[i] === max)
                            return false;                        
                        
                        if(i !== l-1 && ui.values[i] >= ui.values[i + 1]){
                            return false;
                        }
                        
                        if(i === 0 && ui.values[i] <= ui.values[i - 1]){
                            return false;
                        }

                        //Valores en kilos
                        if(i==0)
                            refresh_amount(ui.values);
                    } 

                    transfer_kilos();
                },
                create: function( event, ui ) {
                    
                }
            });
            $mySlider.slider("enable");

            init_amounts();
            $qty_current = sort_inputs(current_kilos + '-' + current_comb);
            refresh_amount(values);
            transfer_kilos();
            create_steps();
            initilized = true;

            create_handlers_tips();

        }//confirm init

        return confirmed;
    }

    /**
     * Refresca las cantidades indicadas en el slider a la variable global amount
     * @param  {array} values Array de indices donde se encuentran los handles
     * @return {none}         Rellena la variable global amount
     */
    function refresh_amount(values){
        amount.length = 0;

        var l = values.length;

        //Valores en kilos
        if( l == 1 ){ //Si solo tenemos un handler (2 productos)            
            amount.push( values[0] );                            
            amount.push( current_kilos - values[0] );
        }

        if( l == 2 ){ //Si tenemos dos handlers (3 productos)            
            amount.push( values[0] );
            amount.push( values[1] - values[0] );
            amount.push( current_kilos - values[1] );            
        }

        if( l == 3 ){ //Si tenemos 3 handlers (4 productos)                                        
            amount.push( values[0] );
            amount.push( values[1] - values[0] );
            amount.push( values[2] - values[1] );
            amount.push( current_kilos - values[2] );            
        }

        if( l == 4 ){ //Si tenemos 4 handlers (5 productos)
            amount.push( values[0] );
            amount.push( values[1] - values[0] );
            amount.push( values[2] - values[1] );
            amount.push( values[3] - values[2] );
            amount.push( current_kilos - values[3] );
        }
    }

    /**
     * Pone todos los inputs a 0     
     */
    function init_amounts(){
        for( var j = 0; j < $qty.length; j++ ){            
            $($qty[j]).parent().prev().find('select').eq(0).find('option').eq(0).attr('selected','selected').change();
            $($qty[j]).val(0);            
        }         
    }    

    /**
     * Ordena los inputs según identificadores de producto, ya que puede ser que en bundle no hayamos metido los inputs ordenados.
     * y devuelve un array con los inputs seleccionados para ese tramo
     * 
     * @param  string tramo Tramo actual por el que vamos a ordenar los inputs. Ej: 15-3 para cuando estemos en 15kg y 3combinaciones
     * @return array  Array de objetos jQuery (input type text) ordenados según id_products
     */
    function sort_inputs(tramo){
        var $cantidades = [];

        id_products = id_products_tramo[tramo].split(',');
        products = products_tramo[tramo].split(',');

        for ( var i = 0; i < id_products.length; i++ ) {
            for( var j = 0; j < $qty.length; j++ ){
                var nombre = 'bundle_option_qty['+ id_products[i] +']';                
                if( $($qty[j]).attr('name') == nombre ){
                    $($qty[j]).addClass(products[i]);
                    $cantidades.push( $($qty[j]) );
                }                
            }            
        }

        return $cantidades;
    }

    /**
     * Transfiere los valores indicados en el slider a los inputs 
     * según los tipos de producto que estemos comprando mediante la variable global product_index
     * a partir del contenido de la variable global amount
     * 
     * @return {none} Inserta los valores en los campos input
     */
    function transfer_kilos(){
        //Solo se transfieren kilos si hay dos o más productos                         
        if(product_index.length >= 2 ){
            for ( var i = 0; i < amount.length; i++ ) {            
            
                //Asignamos valor indicado a cada input y
                //forzamos el trigger de los inputs para que refresque el precio
                $cant = $qty_current[product_index[i]];        

                if($cant){                
                    $cant.parent().prev().find('select').eq(0).find('option').eq(1).attr('selected','selected').change();
                    $cant.val(amount[i]).keyup();
                    
                    var clase = $cant.attr('class');
                    clase = clase.replace('input-text','');
                    clase = clase.replace('qty','');
                    clase = clase.trim();

                    //Llamamos a la función update_seleccion para que actualice el valor de la cantidad para que lo vea el usuario
                    update_seleccion(clase, amount[i]);
                }
            }
        }
    }

    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "");
    };    

    /**
     * Actualiza el texto de la cantidad de producto que configuramos con el slider en el listado de productos.
     * @param  {string} producto string que indica que producto va a actualizar su cantidad
     * @param  {int} cantidad número que indica la cantidad de producto
     */
    function update_seleccion(producto, cantidad){
        var $producto = $seleccion.find('.' + producto).show();
        $producto.find('.num').html(cantidad);
    } 

    /**
     * Crea la barra de pasos del slider (la barra con las rayitas para saber donde están las unidades)    
     */
    function create_steps(){
        var steps = current_kilos + 1,
            percent = 100/current_kilos;

        $slider_steps.empty();

        for(var i = 0; i < steps; i++){

            var $tick = $('<span class="tick tick'+i+'">|</span>').appendTo($slider_steps);
            if(i==0 || i==steps-1) $tick.html('&nbsp;'); 

            if(i>0){ var step = percent * i; $tick.css('left',step+'%'); }
        }
    }

    /**
     * Crea los elementos que sirven de tips en los handlers del slider, para saber que estamos incluyendo en la caja
     */
    function create_handlers_tips(){
        var $handlers = $slider_range.find('a');
        //remove all tips
        $slider_range.find('.tip').remove();
        var cont = 0;
        //Recorro el listado de contenidos que ya están ordenados
        $('.contenido').find('li').each(function(index){
            $this = $(this);
            if($this.is(':visible')){
                var clase = $this.prop('class');                
                //Primer elemento a la izquierda
                if(cont == 0){ 
                    $('<span class="tip '+ clase +'"></span>').appendTo($slider_range);
                    cont++;
                    return; 
                }
                
                //Los siguientes elementos
                $('<span class="tip '+ clase +' tipmove"></span>').appendTo($handlers.eq(cont-1));

                cont++;
            }
            
        });
    }

    function stop_animation_tips(){
        var $handlers = $slider_range.find('a');
        //remove all tips
        $slider_range.find('.tip').removeClass('tipmove');
    }

    if(!is_fuera_temporada){
        //Llamada inicial. Ordenamos los inputs por: naranjas-mesa, naranjas-zumo, limones, mandarinas y pomelos 
        //y llamamos a init con los parámetros por defecto
        $qty_current = sort_inputs(current_kilos + '-' + current_comb);

        init(0, current_kilos, tabla_handler_kilos['h'+current_handlers]['k'+current_kilos].split(','));

        //Ponemos datos de peso caja y fidelización en action bottom
        var $product_options = $('.product-options-bottom'),
            $peso_caja = $('<li class="peso-caja"><span class="num">'+ current_kilos +'</span> peso total</li>').appendTo($seleccion_contenido);
        
        $('<div class="compromiso"><strong>Compromiso Serra</strong> Paga después de probarlas</div>').appendTo($product_options);        

        //Marcamos los kilos que vienen por defecto    
        $('#kilos'+current_kilos).prop('checked',true);

        //Montamos las opciones de productos y mostramos el selector
        var $opciones = $conf_options.find('.options').eq(0);
        if($opciones.length > 0){
            $opciones.find('input').prop('checked',true);
        }
        show_product_selector(true);
    }
});