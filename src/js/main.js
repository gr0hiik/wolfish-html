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
    });

    $('.mobile-menu ul li a').click(function() {
        $('.mobile-menu').slideToggle(250);
    });

    
    function CookieInfo() {
        var data = new Date();
        var cookieBox = document.getElementById("cookie-info");
        var nextData = data.toUTCString(data.setTime(data.getTime() + 1000 * 60 * 60 * 24 * 365));
        
        function setCookie() {
            console.log(nextData);
            document.cookie = "acceptCookieInfo=true; expires="+nextData+";path=/";
            cookieBox.className = 'cookie-hidden';
        }
            
        function isCookie() {
            if (document.cookie!="") {
                var cookieList = document.cookie.split("; ");
                
                for (var i=0; i<cookieList.length; i++) {
                    var cookieName = cookieList[i].split("=")[0];
                    var cookieVal = cookieList[i].split("=")[1];
                    
                    if (cookieName==="acceptCookieInfo") {
                        return decodeURI(cookieVal);
                    };
                }
            }
        }
        
        if (isCookie() !== 'true') {        
            var button = document.getElementById("cookie-button");
            button.onclick = setCookie;
            
        } else {
            cookieBox.className = 'cookie-hidden';
        }
    }
    
    CookieInfo();

});


