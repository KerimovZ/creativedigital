;
(function ($) {
    'use strict';
    $(window).on('load', function () {
        $('.ba-slider').slick({
            dots: true,
        });
        
        $('.ba-sliderr').slick({
            infinite: true
            , slidesToShow: 3
            , slidesToScroll: 3
        });
        
         var map = new google.maps.Map($('#map')[0], {
            zoom: 8, 
            center: {lat: 49.5893535,lng: 34.5509142}, 
            disableDefaultUI: true,
        });
        
        var marker = new google.maps.Marker({
            map: map,
            position: {
                lat: 49.6136287,
                lng: 34.5720185
            },
        });
        
    });
})(jQuery);