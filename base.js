(function( $ ) {
    $.fn.barStatus = function(options){

        var defaults = {
            message: 'Something..',
            background: '#2ECC71',
            closed: false,
            duration: 3000,
            removeIcon: 'X'
        }

        var config = $.extend( defaults, options );
        
        if($('#box').length){
            $('#box').remove();
        }

        // create element
        var obj = $('<div>');
        obj.attr('id','box');
        obj.attr('class','');
        obj.attr('style','border');
        obj.css({
            'height':'70px',
            'width':'100%',
            'position':'absolute',
            'top':-$(this).outerHeight(),
            'background-color':config.background,
            'color':'white'
        });
        obj.html('<p style="padding:0 10px;display:inline-block;float:left">'+config.message+'</p>');
        obj.appendTo('body');

        if(config.closed){
            obj.append('<a style="margin:10px;float:right;color:#fff;text-decoration:none;" class="remove" href="javascript:void(0)">'+config.removeIcon+'</a>');

            setTimeout(function(){
                obj.animate({top:"0"}, 700);
            },100);

            $('.remove').click(function(){
                closed(obj);
            });

        }else{
            setTimeout(function(){
                obj.animate({top:"0"}, 700)
                .delay(config.duration)
                .animate({
                    top:-$(this).outerHeight()
                },  700, function(){
                    obj.remove();
                });
                
            },100);
        }

        function closed(obj){
            obj.animate({
                top:-$(this).outerHeight()
            },  700, function(){
                obj.remove();
            });
        }

    }
}( jQuery ));