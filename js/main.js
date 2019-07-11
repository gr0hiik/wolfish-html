$(document).ready(function() {

    var d = new Date();
    $('.currentYear').html(d.getFullYear());

    // TRIGGER FOR LIGHTBOX GALLERY
    // var gallery = $('.gallery ul li a');

    // TRIGGER FOR OWLCAROULSEL v2.3.4
    // $('.slider').owlCarousel();

    //STICKY TOP NAVIGATION
    
    function stickynav() {
        var x = $(".nav").position().top;
        
        $(window).scroll(function() {
            var y = $(window).scrollTop();
                        
            if (y>x+2) {
                $(".nav").addClass("sticky");
            } else {
                $(".nav").removeClass("sticky");
            }
        });
    }
    
    stickynav();

    // TRIGGER FOR SHOW/HIDE MOBILE MENU
    
    $('.mm-trigger, .mm-close').click(function(e) {
        e.preventDefault();

        $('.mobile-menu').slideToggle(250);
    })

    $('.mobile-menu ul li a').click(function() {
        $('.mobile-menu').slideToggle(250);
    })

});
